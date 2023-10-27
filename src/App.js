import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import Page1 from "./Page1";
import { polygonMumbai } from "wagmi/chains";

const alchemyId = process.env.ALCHEMY_ID;
const walletConnectProjectId = process.env.WALLETCONNECT_PROJECT_ID;

// Choose which chains you'd like to show
const chains = [polygonMumbai];

const config = createConfig(
  getDefaultConfig({
    appName: "Your App Name",
    alchemyId,
    walletConnectProjectId,
    chains,
  })
);

const App = () => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider theme="retro">
        <Page1></Page1>
        {/* <ConnectKitButton /> */}
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default App;
