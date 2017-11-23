import Typography from 'typography';
import github from 'typography-theme-github';

const typography = new Typography(github);

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography;
