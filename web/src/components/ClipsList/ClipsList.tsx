import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { ClipsQuery } from "@/API";
import useClipsQuery from "@/hooks/useClipsQuery";
import SortingButtons from "./SortingButtons";
import ClipItem from "./ClipItem";

interface RowProps extends ListChildComponentProps {
  data: ClipsQuery["getByBroadcasterId"]["clips"];
}

const Row = ({ index, style, data }: RowProps): JSX.Element => (
  <ClipItem clip={data[index]} style={style} />
);

const ClipsList = (): JSX.Element => {
  const clipsQuery = useClipsQuery();

  return (
    <div
      style={{ maxWidth: "1000px", minHeight: "400px", height: "100%" }}
      className="flex flex-col overflow-y-hidden overflow-x-hidden w-full"
    >
      <div className="ml-2 mb-2 flex items-center">
        <span>Trier par : </span>
        <SortingButtons />
        <span className="ml-2">
          Cette fonctionnalité n&apos;est pas encore disponible !<br />
          (par défaut les clips sont triés par vues)
        </span>
      </div>
      <AutoSizer disableWidth>
        {({ height }) => (
          <List
            className="custom-scrollbar"
            height={height - 60} // check THIS
            itemCount={clipsQuery.data?.getByBroadcasterId.clips.length || 0}
            itemSize={110}
            width="100%"
            itemData={clipsQuery.data?.getByBroadcasterId.clips}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default ClipsList;
