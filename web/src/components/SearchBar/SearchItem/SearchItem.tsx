import Link from "next/link";
import Image from "next/image";
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
          <figure aria-label={value.display_name}>
            <Image
              src={value.thumbnail_url}
              width={48}
              height={48}
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
