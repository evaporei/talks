import { dark } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
import prismClojure from 'react-syntax-highlighter/languages/prism/clojure'

export default {
  ...dark,
  prism: {
    style: okaidia,
    languages: {
      clojure: prismClojure
    }
  }
}
