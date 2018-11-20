import './index.sass';
import './index.pug';
import initIntro from './intro'
import  initSets from './sets'

export default $root => {
  let $intro = $root.find('.intro');
  if($intro.length) {
    initIntro($intro)
  }

  let $sets = $root.find('.sets');
  if($sets.length) {
    initSets($sets)
  }

};
