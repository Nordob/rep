import './404';
import initHome from './home';

export default $root => {

  const $home = $('.home');
  if($home.length) {
    initHome($home);
  }

};
