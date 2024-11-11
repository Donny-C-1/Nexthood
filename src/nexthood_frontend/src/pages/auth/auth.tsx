import { AuthClient } from "@dfinity/auth-client";


export async function authenticateUser() {
    const authClient = await AuthClient.create();
    
    if (await authClient.isAuthenticated()) {
      console.log("User is already authenticated.");
      return authClient;
    }
  
    // Login logic with Internet Identity
    await authClient.login({
      identityProvider: `http://localhost:4943?canisterId=rdmx6-jaaaa-aaaaa-aaadq-cai#authorize`,
        // ? "https://identity.ic0.app/#authorize"
        
      onSuccess: () => {
        console.log("User successfully logged in.");
      },
      onError: (error: any) => {
        console.error("Login failed: ", error);
      }
    });
  
    return authClient;
  }