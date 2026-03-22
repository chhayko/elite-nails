import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Exclude: API, Next internals, and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
