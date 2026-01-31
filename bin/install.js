#!/usr/bin/env node

import externalResources from "@corejslib/utils/external-resources";

externalResources.add( {
    "id": "corejslib/uws",
    "node": true,
    "caller": import.meta.url,
} );

const res = await externalResources.install( {
    "force": false,
} );

if ( !res.ok ) process.exit( 1 );
