import { CloseIcon, SearchIcon } from "../Icons/Icons";

type SearchBarProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  reset?: () => void;
  value: string;
};

export default function SearchField({ onChange, value, reset }: SearchBarProps) {
  return (
    <div className="w-full flex items-center relative mb-8">
      <input
        type="text"
        placeholder="search"
        data-testid="search-field"
        className="border border-purple-400 rounded-lg py-4 px-12 w-full"
        onChange={onChange}
        value={value}
      />
      <SearchIcon />
      {reset && (
        <button
          className="absolute right-0 mr-2 "
          onClick={reset}
          data-testid="reset-button"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
}
