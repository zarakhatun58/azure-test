/* eslint-disable */

// <GetUserSnippet>
import {
    Client,
    GraphRequestOptions,
    PageCollection,
    PageIterator,
  } from "@microsoft/microsoft-graph-client";
  import { AuthCodeMSALBrowserAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser";
  import { endOfWeek, startOfWeek } from "date-fns";
  import { zonedTimeToUtc } from "date-fns-tz";
  import { User, Event } from "microsoft-graph";
  import * as SiteAPI from "./ApiDetails";
  
  let graphClient: Client | undefined = undefined;
  
  function ensureClient(authProvider: AuthCodeMSALBrowserAuthenticationProvider) {
    if (!graphClient) {
      graphClient = Client.initWithMiddleware({
        authProvider: authProvider,
      });
    }
    return graphClient;
  }
  
  export async function getUser(
    authProvider: AuthCodeMSALBrowserAuthenticationProvider
  ): Promise<User> {
    ensureClient(authProvider);
    const user: User = await graphClient!
      .api("/me")
      .select("displayName,mail,mailboxSettings,userPrincipalName")
      .get();
    return user;
  }
  
  // </GetUserSnippet>
  
  // <GetUserWeekCalendarSnippet>
  export async function getUserWeekCalendar(
    authProvider: AuthCodeMSALBrowserAuthenticationProvider,
    timeZone: string
  ): Promise<Event[]> {
    ensureClient(authProvider);
  
    // Generate startDateTime and endDateTime query params
    // to display a 7-day window
    const now = new Date();
    const startDateTime = zonedTimeToUtc(
      startOfWeek(now),
      timeZone
    ).toISOString();
    const endDateTime = zonedTimeToUtc(endOfWeek(now), timeZone).toISOString();
  
    // GET /me/calendarview?startDateTime=''&endDateTime=''
    // &$select=subject,organizer,start,end
    // &$orderby=start/dateTime
    // &$top=50
    var response: PageCollection = await graphClient!
      .api("/me/calendarview")
      .header("Prefer", `outlook.timezone="${timeZone}"`)
      .query({ startDateTime: startDateTime, endDateTime: endDateTime })
      .select("subject,organizer,start,end")
      .orderby("start/dateTime")
      .top(25)
      .get();
  
    if (response["@odata.nextLink"]) {
      // Presence of the nextLink property indicates more results are available
      // Use a page iterator to get all results
      var events: Event[] = [];
  
      // Must include the time zone header in page
      // requests too
      var options: GraphRequestOptions = {
        headers: { Prefer: `outlook.timezone="${timeZone}"` },
      };
  
      var pageIterator = new PageIterator(
        graphClient!,
        response,
        (event) => {
          events.push(event);
          return true;
        },
        options
      );
      await pageIterator.iterate();
      return events;
    } else {
      return response.value;
    }
  }
  // </GetUserWeekCalendarSnippet>
  
  // <CreateEventSnippet>
  export async function createEvent(
    authProvider: AuthCodeMSALBrowserAuthenticationProvider,
    newEvent: Event
  ): Promise<Event> {
    ensureClient(authProvider);
  
    // POST /me/events
    // JSON representation of the new event is sent in the
    // request body
    return await graphClient!.api("/me/events").post(newEvent);
  }
  // </CreateEventSnippet>
  
  //Custom API Details
  
  export async function getSiteInformation(
    authProvider: AuthCodeMSALBrowserAuthenticationProvider
  ) {
    ensureClient(authProvider);
    const siteDetails = await graphClient!
      .api(SiteAPI.SITE_TITLE_URL)
      .select("id,name,webUrl,displayName")
      .get();
    return siteDetails;
  }
  
  export async function getListInformation(
    authProvider: AuthCodeMSALBrowserAuthenticationProvider,
    SiteId: any
  ) {
    ensureClient(authProvider);
    const siteDetails = await graphClient!
      .api(SiteAPI.SITE_LIST_URL.replace("{site_id}", SiteId))
      .select("id,name,webUrl,displayName")
      .get();
    return siteDetails;
  }
  
  export async function getTaqeefNews(
    authProvider: AuthCodeMSALBrowserAuthenticationProvider,
    siteId: any,
    listId: any
  ) {
    ensureClient(authProvider);
    var response = await graphClient!
      .api(
        SiteAPI.TAQEEF_NEWS.replace("{site_id}", siteId).replace(
          "{list_id}",
          listId
        )
      )
      .get();
    return response;
  }
  export async function getStatementInformation(
    authProvider: AuthCodeMSALBrowserAuthenticationProvider,
    siteId: any,
    listId: any
  ) {
    ensureClient(authProvider);
    var response = await graphClient!
      .api(
        SiteAPI.PDCStatementList.replace("{site_id}", siteId).replace(
          "{list_id}",
          listId
        )
      )
      .get();
    return response;
  }
  