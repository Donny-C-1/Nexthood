import { AuthClient } from "@dfinity/auth-client";

async function init() {
    let client = await AuthClient.create();
    return client;
}

export default init();