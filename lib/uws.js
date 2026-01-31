import externalResources from "@corejslib/utils/external-resources";
import { require } from "@corejslib/utils/utils";

const resource = await externalResources
    .add(
        {
            "id": "corejslib/uws",
            "node": true,
            "caller": import.meta.url,
        },
        {
            "autoUpdate": false,
        }
    )
    .check();

export default require( resource.getResourcePath( "uws.node" ) );
