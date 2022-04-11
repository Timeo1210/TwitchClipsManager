import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { ClipsQuery, VideoQuery } from "@/API";
import SortingButtons from "./SortingButtons";
import ClipItem from "./ClipItem";

interface RowProps extends ListChildComponentProps {
  data: {
    clips: ClipsQuery["Clips_getByBroadcasterId"]["clips"];
    videoContext: VideoQuery["Video_getById"] | null;
  };
}

const Row = ({ index, style, data }: RowProps): JSX.Element => (
  <ClipItem
    clip={data.clips[index]}
    videoContext={data.videoContext}
    style={style}
  />
);

type ClipsListProps = {
  clips: ClipsQuery["Clips_getByBroadcasterId"]["clips"];
  video?: VideoQuery["Video_getById"] | null;
  style?: React.CSSProperties;
};

const ClipsList = ({
  clips,
  video = null,
  style = {},
}: ClipsListProps): JSX.Element => (
  <div
    style={{
      maxWidth: "1000px",
      minHeight: "400px",
      height: "100%",
      ...style,
    }}
    className="flex flex-col overflow-y-hidden overflow-x-hidden w-full"
  >
    {video && (
      <div className="ml-2 mb-2 flex items-center">
        <span>Trier par : </span>
        <SortingButtons />
        <span className="ml-2">
          Cette fonctionnalité n&apos;est pas encore disponible !<br />
          (par défaut les clips sont triés par vues)
        </span>
      </div>
    )}
    {clips && (
      <AutoSizer disableWidth>
        {({ height }) => (
          <List
            className="custom-scrollbar"
            height={height - 60} // check THIS
            itemCount={clips.length || 0}
            itemSize={110}
            width="100%"
            itemData={{
              clips,
              videoContext: video,
            }}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    )}
    {!clips && <h1>Une erreur est survenue !</h1>}
  </div>
);

ClipsList.defaultProps = {
  video: null,
  style: {},
};

export default ClipsList;
