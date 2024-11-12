import Cookies from 'js-cookie';
import { AuthClient } from '@dfinity/auth-client';

export const authenticateUser = async()=>{
    let authClient = await AuthClient.create();
    
    try{
        if (authClient.isAuthenticated()) {
            alert("Is Authenticated");
        } else {
            console.log("Canister_id: ", process.env.CANISTER_ID);
            await authClient.login({
                identityProvider: `http://localhost:4943?canisterId=${process.env.CANISTER_ID}#authorize`,
                onSuccess: () => {
                    console.log("Successfully Logged in");
                    const token = auth?.getIdentity().getPrincipal().toString();
                    Cookies.set('authToken', token, { expires: 7 });
                },
                onError: (err: any) => {
                    console.log("Error! \n", err);
                }
            })
        }
        window?.auth = authClient;
        console.log(authClient);
    }
    catch(error){
        console.log(error)
    }
}
