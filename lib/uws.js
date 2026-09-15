import externalResources from "#core/external-resources";
import { require } from "#core/utils";

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
