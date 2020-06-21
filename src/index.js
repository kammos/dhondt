import {render} from 'preact';

import s from './styles.scss';

render(<p class={s.main}>hello</p>, document.querySelector('body'));
