/* eslint-disable */
// export const BASE_PATH = `https://graph.microsoft.com/v1.0/sites`;
// export const USER_PROFILE_URL = `https://graph.microsoft.com/oidc/userinfo`;
// export const USER_PROFILE_PIC_URL =
//   `https://graph.microsoft.com/v1.0/me/photo/$value`;
// export const MAIL_COUNT_URL =
//   `https://graph.microsoft.com/v1.0/me/mailFolders/Inbox/messages?$filter=isRead ne true&$count=true&$top=5000`;
// export const CALENDAR_ADD_EVENT_URL =
//   `https://graph.microsoft.com/v1.0/me/events`;
// export const ONEDRIVE_LINK_URL = `https://graph.microsoft.com/v1.0/me/drive`;
// export const SITE_TITLE_URL =
//   `https://graph.microsoft.com/v1.0/sites?$search=ACModel`;
// export const SITE_LIST_URL = `${BASE_PATH}/{site_id}/lists`;
// export const USER_PRESENCE_URL = `https://graph.microsoft.com/beta/me/presence`;
// export const MY_RECENT_FILES =
//   `https://graph.microsoft.com/v1.0/me/drive/recent?$top=5&$orderby=lastModifiedDateTime desc`;
// export const TAQEEF_NEWS = `${BASE_PATH}/{site_id}/lists/{list_id}/items?$expand=fields`;
// export const PDCStatementList = `${BASE_PATH}/{site_id}/lists/{list_id}/items?$expand=fields`;
// export const HERO_IMAGE_URL = `${BASE_PATH}/{site_id}/lists/{list_id}/items?$expand=fields`;
 

//Workspace
export const GET_ROOT_FILES = `${BASE_PATH}/{site_id}/drives/{drive_id}/root/children`;
export const GET_CHILD_FILES = `${BASE_PATH}/{site_id}/drives/{drive_id}/items/{item_id}/children`;

export const POST_HERO_IMAGE_ITEM = `${BASE_PATH}/{site_id}/lists/{list_id}/items`;
export const POST_EMP_HIGHT_IMAGE_ITEM = `${BASE_PATH}/{site_id}/lists/{list_id}/items`;
export const POST_NEWS_ITEM = `${BASE_PATH}/{site_id}/lists/{list_id}/items`;
export const POST_CEO_MESSAGE_ITEM = `${BASE_PATH}/{site_id}/lists/{list_id}/items`;
export const POST_ANNOUNCEMENTS_ITEM = `${BASE_PATH}/{site_id}/lists/{list_id}/items`;
export const POST_HERO_ITEM = `${BASE_PATH}/{site_id}/lists/{list_id}/items`;
// export const POST_ASSET_LIB_ITEM=`${BASE_PATH}/{site_id}/drives/{drive_id}/items/root:/{file_name}:/content`;
export const POST_ASSET_LIB_ITEM = `${BASE_PATH}/{site_id}/drives/{drive_id}/items/root:/{file_name}:/content`;
//'https://graph.microsoft.com/v1.0/sites/{site_id}/drives/{drive_id}/items/{item_id}:/{file_name}:/createUploadSession';

export const HOME = "/Home";
export const CALENDER_LINK = `/Calender`;
export const EVENT_LINK = `/newevent`;

export const CEO_MESSAGE_VIEW_URL = "/CeoInfo";
export const ANNOUNCEMENT_READ_MORE = "/AnnouncementReadMore";
export const EVENT_READ_MORE = "/EventsInfo";
export const NEWS_READ_MORE = "/NewsInfo";
export const HERO_IMG_INPUT = "/HeroImgInput";
export const NEWS_INPUT = "/NewsInput";
export const EMP_HIGH_INPUT = "/EmpHighInput";
export const ANNOUNCEMENT_INPUT = "/AnnouncementInput";
export const CALENDER_INPUT = "/CalenderInput";
