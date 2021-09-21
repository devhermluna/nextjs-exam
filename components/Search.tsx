import React, { useMemo } from 'react';
import Icon from './Icon';
import InputWithDebounce from './InputWithDebounce';
import MetaButton from './MetaButton';

interface Props {
  onChange: (e: string) => void;
  perPage: number;
  totalResults: number
  onPrev: (page: number) => void;
  onNext: (page: number) => void;
  page: number;
}

const Search = ({
  onChange,
  page,
  perPage,
  totalResults,
  onPrev,
  onNext,
}: Props) => {
  const canGoPrev = useMemo(() => page === 1, [page]);

  const canGoNext = useMemo(() => Math.floor(totalResults / (perPage || 0)) <= page, [totalResults, page, perPage]);

  return (
    <div className="search p-2">
      <div className="bg-white rounded-lg flex items-center px-3">
        <Icon name="search" />
        <InputWithDebounce
          name="search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
          }}
          className="flex-grow h-12 bg-transparent px-2"
          placeholder="Search..."
        />
        <div className="controls flex items-center">
          <MetaButton
            disabled={canGoPrev}
            callback={() => {
              onPrev(page - 1);
            }}
            icon="chevron-left"
          />
          <MetaButton
            disabled={canGoNext}
            callback={() => {
              onNext(page + 1);
            }}
            icon="chevron-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
