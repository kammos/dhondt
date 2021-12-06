import {render} from 'react-dom';

import s from './styles.scss';

render(<p class={s.main}>hello</p>, document.querySelector('body'));
