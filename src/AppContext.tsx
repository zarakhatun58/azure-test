import React from 'react';
import  {
    useContext,
    createContext,
    useState,
    MouseEventHandler,
    useEffect} from 'react';
  
  import { AuthCodeMSALBrowserAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser';
  import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
  import { useMsal } from '@azure/msal-react';
import config from "./config";
import { getListInformation, getSiteInformation, getUser } from './GraphService';


  // <AppContextSnippet>
export interface AppUser {
  displayName?: string,
  email?: string,
  avatar?: string,
  timeZone?: string,
  timeFormat?: string
};

export interface SiteInformation {
  siteId?: any;
  siteName?: any;
  webUrl?: any;
  displayName?: any;
}

// export interface ListInformation {
//   TaqeefNews?: any;
//   PDCStatement?:any;
// }


export interface AppError {
  message: string,
  debug?: string
};

type AppContext = {
  user?: AppUser;
  error?: AppError;
  signIn?: MouseEventHandler<HTMLElement>;
  signOut?: MouseEventHandler<HTMLElement>;
  displayError?: Function;
  clearError?: Function;
  authProvider?: AuthCodeMSALBrowserAuthenticationProvider;
  // siteInfo?: SiteInformation;
  // listInfo?: ListInformation;
  
}


  const appContext = createContext<AppContext>({
    user: undefined,
    error: undefined,
    signIn: undefined,
    signOut: undefined,
    displayError: undefined,
    clearError: undefined,
    authProvider: undefined
  });
  
  
  
 
  export function useAppContext(): AppContext {
    return useContext(appContext);
  }
  
  interface ProvideAppContextProps {
    children: React.ReactNode;
  }
  var firstSiteId = "";
  export default function ProvideAppContext({ children }: ProvideAppContextProps) {
    const auth = useProvideAppContext();
    return (
      <appContext.Provider value={auth}>
        {children}
      </appContext.Provider>
    );
  }

  function useProvideAppContext() {
    const [user, setUser] = useState<AppUser | undefined>(undefined);
    const [error, setError] = useState<AppError | undefined>(undefined);
  
    const msal = useMsal();

    const displayError = (message: string, debug?: string) => {
      setError({ message, debug });
    }
  
    const clearError = () => {
      setError(undefined);
    }
  
    // const authProvider = undefined;
     // Used by the Graph SDK to authenticate API calls
  const authProvider = new AuthCodeMSALBrowserAuthenticationProvider(
    msal.instance as PublicClientApplication,
    {
      account: msal.instance.getActiveAccount()!,
      scopes: config.scopes,
      interactionType: InteractionType.Popup,
    }
  );
    // </AuthProviderSnippet>

  // <UseEffectSnippet>
  useEffect(() => {
    const checkUser = async () => {
      if (!user) {
        try {
          // Check if user is already signed in
          const account = msal.instance.getActiveAccount();
          if (account) {
            // Get the user from Microsoft Graph
            const user = await getUser(authProvider);
            //console.log(user);
            setUser({
              displayName: user.displayName || '',
              email: user.mail || user.userPrincipalName || '',
              timeFormat: user.mailboxSettings?.timeFormat || 'h:mm a',
              timeZone: user.mailboxSettings?.timeZone || 'UTC',

            });
          }
        } catch (err: any) {
          displayError(err.message);
        }
      }
    };
    checkUser();
  });
  // </UseEffectSnippet>
  
    const signIn = async () => {
      await msal.instance.loginPopup({
        scopes: config.scopes,
        prompt: 'select_account'
      });

       // Get the user from Microsoft Graph
    const user = await getUser(authProvider);

    setUser({
      displayName: user.displayName || '',
      email: user.mail || user.userPrincipalName || '',
      timeFormat: user.mailboxSettings?.timeFormat || '',
      timeZone: user.mailboxSettings?.timeZone || 'UTC'
    });
  };
  
   // <SignOutSnippet>
  const signOut = async () => {
    await msal.instance.logoutPopup();
    setUser(undefined);
  };
  
    return {
      user,
      error,
      signIn,
      signOut,
      displayError,
      clearError,
      authProvider
    };
  }