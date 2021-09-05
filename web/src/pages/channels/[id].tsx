import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import { ChannelDocument, ChannelQuery, ChannelQueryVariables } from "@/API";
import { ChannelProvider } from "@/contexts/ChannelContext";
import { ToolProvider } from "@/contexts/ToolContext";
import SidePanelLayout from "@/components/SidePanelLayout";
import Burger from "@/components/Burger";
import ToolsLayout from "@/components/Tools/ToolsLayout";
import { customFetcher } from "@/utils/graphqlFetcher";

interface IParams extends ParsedUrlQuery {
  id: string;
}

const Channel = (): JSX.Element => (
  <SidePanelLayout width={200} wrapperClasses="bg-gray-900" menu={<Burger />}>
    <ToolsLayout />
  </SidePanelLayout>
);

const ChannelWrapper = ({
  channel,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => (
  <ChannelProvider channel={channel}>
    <ToolProvider>
      <Channel />
    </ToolProvider>
  </ChannelProvider>
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.params as IParams;
  try {
    const data = await customFetcher<ChannelQuery, ChannelQueryVariables>(
      ChannelDocument,
      { id }
    )();
    return {
      props: {
        channel: data.get,
      },
    };
  } catch {
    return {
      props: {
        channel: {} as ChannelQuery["get"], // trick to ensure correct type
      },
      redirect: { permanent: true, destination: "/404" },
    };
  }
};

export default ChannelWrapper;
