import { GifRecommendations, WrapperRecommendations } from "./styled";
import Masonry from "@mui/lab/Masonry";

export function Recommendations() {
  return (
    <WrapperRecommendations>
      <Masonry columns={4} spacing={1}>
        <GifRecommendations src="https://1.bp.blogspot.com/-WuOcrksAEuE/WyFnD63-nlI/AAAAAAAABm0/iXeNp_2uGvwb-K7xlwlMbGQuBJqv4SX7gCEwYBhgL/s1600/gifs-on-cli.gif" />
        <GifRecommendations src="https://media.tenor.com/REp1_0e0OA0AAAAd/ishowspeed-shake.gif" />
        <GifRecommendations src="https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif" />
        <GifRecommendations src="https://media.tenor.com/bnW-pqyMpocAAAAd/papich-dwmlg.gif" />
        <GifRecommendations src="https://media.tenor.com/_GH1zSS_gC8AAAAd/papich.gif" />
        <GifRecommendations src="https://blog.teamtailor.com/hs-fs/hubfs/giphy%20(3).gif?width=500&height=245&name=giphy%20(3).gif" />
        <GifRecommendations src="https://cdn.vox-cdn.com/thumbor/hCpYLyPprTbKjscMEkyStAHSq1Y=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8689447/whiguyblink.gif" />
        <GifRecommendations src="https://media.tenor.com/iBU7ZHKt8vUAAAAd/papich.gif" />
        <GifRecommendations src="https://media.tenor.com/dvHb-7fpySAAAAAd/papich.gif" />
        <GifRecommendations src="https://bs.uenicdn.com/blog/wp-content/uploads/2018/04/giphy.gif" />
        <GifRecommendations src="https://media.tenor.com/wdv_JiOkBGgAAAAC/cheers-lets-drink.gif" />
      </Masonry>
    </WrapperRecommendations>
  );
}
