import Link from "next/link";
import { UnpackedArray } from "@/utils/UnpackedArray";
import { SearchChannelsQuery } from "@/API";

type SearchItemProps = {
  value: UnpackedArray<SearchChannelsQuery["search"]>;
};

const SearchItem = ({ value }: SearchItemProps): JSX.Element => (
  <Link
    href={{
      pathname: "/channels/[id]",
      query: { id: value.id },
    }}
  >
    <a>
      <div className="flex justify-start hover:bg-gray-700 rounded-md">
        <div className="p-1">
          <figure aria-label={value.display_name} className="w-12 h-12">
            <img
              src={value.thumbnail_url}
              alt={value.display_name}
              className="rounded-full"
            />
          </figure>
        </div>
        <div className="flex justify-start items-center pl-2 w-full">
          <p>{value.display_name}</p>
        </div>
      </div>
    </a>
  </Link>
);

export default SearchItem;
