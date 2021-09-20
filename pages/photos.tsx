import type { NextPage } from 'next';
import Head from 'next/head';
import useAPI from 'custom-hooks/useAPI';
import React, { useEffect, useState } from 'react';
import { range } from 'lodash';
import useDidMountEffect from 'custom-hooks/useDidMountEffect';
import DefaultLayout from 'layouts/default-layout';
import PhotoLoader from '@/components/Photo/Loader';
import { Photo } from '@/interfaces/Photo';
import PictureItem from '@/components/Photo/Item';
import Search from '@/components/Search';
import { Meta } from '@/interfaces/Meta';

interface PhotoWithMeta extends Meta {
  photos: Photo[];
  total_results: number;
}

const Photos: NextPage = () => {
  const [photosAPI] = useAPI('photos');
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [meta, setMeta] = useState<Meta>({
    page: 1,
    per_page: 50,
  });

  const setDetails = (response: PhotoWithMeta) => {
    setPhotos(response.photos);
    setMeta({
      page: response.page,
      per_page: response.per_page,
    });
    setTotalResults(response.total_results);
  };

  const getPhotos = async (search = false, params: Meta) => {
    if (loading) return;

    try {
      setLoading(true);
      const api = search
        ? photosAPI.search(searchQuery, params)
        : photosAPI.get(params);
      const response = await api;
      setDetails(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPhotos(false, meta);
  }, []);

  useDidMountEffect(() => {
    getPhotos(true, {
      page: 1,
    });
  }, [searchQuery]);

  useDidMountEffect(() => {
    getPhotos(!!searchQuery, meta);
  }, [meta]);

  return (
    <>
      <Head>
        <title>NextJS Exam - Herm</title>
        <meta name="description" content="Upwork exam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <Search
          onChange={(value: string) => {
            setSearchQuery(value);
          }}
          page={meta.page}
          perPage={meta.per_page || 50}
          totalResults={totalResults}
          onPrev={(value: number) => {
            setMeta((currentState) => ({
              ...currentState,
              page: value,
            }));
          }}
          onNext={(value: number) => {
            setMeta((currentState) => ({
              ...currentState,
              page: value,
            }));
          }}
        />
        <div className="flex flex-wrap">
          {!loading && photos.map((photo: Photo) => (
            <PictureItem photo={photo} key={photo.id} />
          ))}
          {loading && range(6).map((item) => (
            <PhotoLoader key={item} />
          ))}
        </div>
      </DefaultLayout>
    </>
  );
};

export default Photos;
