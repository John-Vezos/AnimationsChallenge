import { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { getCookie, setCookie } from 'typescript-cookie';

import CookiesBackdrop from './CookiesBackdrop';
import CookiesButton from './CookiesButton';
import CookiesContainer from './CookiesContainer';

const WELCOME_MESSAGE = `${window.location.hostname} uses cookies to enhance your online experience. By using this website you agree to our Cookie Policy.`;
const ACCEPT_COOKIES = 'Accept Cookies';
let timeoutListener: NodeJS.Timeout | null = null;
const index: FunctionComponent = () => {
  const [cookiesAllow, setCookiesAllow] = useState(
    !!getCookie('cookies-allow'),
  );

  const [isCookiesModalShow, setIsCookiesModalShow] = useState(true);

  useEffect(() => {
    return () => clearTimeout(timeoutListener as NodeJS.Timeout);
  }, []);

  const cookieModalHandler = () => {
    setCookie('cookies-allow', true, { expires: 365 * 2 });
    timeoutListener = setTimeout(() => setCookiesAllow(false), 1000);
    setIsCookiesModalShow(false);
  };

  return (
    <Fragment>
      {!cookiesAllow && (
        <Fragment>
          <CookiesBackdrop display={isCookiesModalShow ? 'block' : 'none'} />
          <CookiesContainer expand={isCookiesModalShow}>
            {WELCOME_MESSAGE}
            <CookiesButton type="button" onClick={cookieModalHandler}>
              {ACCEPT_COOKIES}
            </CookiesButton>
          </CookiesContainer>
        </Fragment>
      )}
    </Fragment>
  );
};

export default index;
