import ActionButton from "@/components/ActionButton";
import { VideostateQueryVariables } from "@/API";
import useVideostateQuery from "@/hooks/useVideostateQuery";

type VideostateDetailsProps = {
  video_id: VideostateQueryVariables["video_id"];
};

const VideostateDetails = ({
  video_id,
}: VideostateDetailsProps): JSX.Element => {
  const { isLoading, isError, data } = useVideostateQuery({ video_id });
  const isInvalid = data?.Videostate_getById.state === "INVALID" ? true : false;
  const isDownloadable = data?.Videostate_getById.download_url ? true : false;

  return (
    <div className="m-2 p-2 text-3xl flex flex-col items-center justify-center text-center">
      {isLoading && <span>Chargement...</span>}
      {isError && (
        <span className="text-red-600">Une erreur est survenue !</span>
      )}
      {isDownloadable && (
        <>
          <a
            target="_blank"
            href={data?.Videostate_getById.download_url}
            rel="nofollow noopener noreferrer"
          >
            <ActionButton className="p-2 text-2xl font-semibold">
              <span className="tracking-widest">Télécharger</span>
            </ActionButton>
          </a>
          <span className="mt-1 text-sm">(Traitement fini)</span>
        </>
      )}
      {!isLoading && !isError && !isDownloadable && (
        <span className={`${isInvalid ? "text-red-600" : ""}`}>
          {isInvalid
            ? "Une erreur est survenue !"
            : `En cours de traitement...(${data?.Videostate_getById.state})`}
        </span>
      )}
    </div>
  );
};

export default VideostateDetails;
