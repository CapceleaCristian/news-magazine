import {
  CurrentElementsInterval,
  PageButton,
  PageButtonsWrapper,
  PageWrapper,
  PaginationWrapper,
  TotalElementsCount,
} from "./pagination.styles";

interface Props {
  interval: string;
  totalNews: number;
  onPrev: () => void;
  onNext: () => void;
  isDisabledPrevious: boolean;
  isDisabledNext: boolean;
}

export function Pagination({
  interval,
  totalNews = 6,
  onPrev,
  onNext,
  isDisabledPrevious = false,
  isDisabledNext = false,
}: Props) {
  return (
    <PaginationWrapper>
      <PageWrapper>
        <CurrentElementsInterval>{interval}</CurrentElementsInterval>
        <TotalElementsCount>out of {totalNews}</TotalElementsCount>
      </PageWrapper>
      <PageButtonsWrapper>
        <PageButton disabled={isDisabledPrevious} onClick={onPrev}>
          Previous
        </PageButton>
        <PageButton disabled={isDisabledNext} onClick={onNext}>
          Next
        </PageButton>
      </PageButtonsWrapper>
    </PaginationWrapper>
  );
}
