import './404';
import initHome from './home';

export default () => {

  const $home = $('.home');
  if($home.length) {
    initHome($home);
  }

};
