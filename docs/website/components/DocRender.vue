<template>
  <div :class="`${componentName} markdown`" v-html="content"></div>
</template>
<script>
/*global hljs*/
import MarkdownIt from 'markdown-it'
import Button from '../../zh-cn/Button.md'
import Header from '../../zh-cn/Header.md'
import Badge from '../../zh-cn/Badge.md'
import Start from '../../zh-cn/Start.md'

// 按需高亮
import hljs from 'highlight.js/lib/highlight.js'
import hl_html from 'highlight.js/lib/languages/xml.js'
import hl_css from 'highlight.js/lib/languages/css.js'
import hl_javascript from 'highlight.js/lib/languages/javascript.js'
import hl_json from 'highlight.js/lib/languages/json.js'
hljs.registerLanguage('html', hl_html)
hljs.registerLanguage('css', hl_css)
hljs.registerLanguage('javascript', hl_javascript)
hljs.registerLanguage('json', hl_json)
import { highlightInit } from '../util/utils.js'
// 键名要小写
const mdList = {
  'badge': Badge,
  'button': Button,
  'header': Header,
  'start': Start
}

const md = new MarkdownIt({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, str).value
    }
    return ''
  }
})

export default {
  name: 'DocRender',
  props: {
    componentName: {
      type: String
    },
  },
  data() {
    return {
      content: ''
    }
  },
  mounted() {
    this.render()
  },
  watch: {
    componentName() {
      this.render()
    }
  },
  methods: {
    render() {
      this.content = md.render(mdList[this.componentName])
      this.$nextTick(() => {
        // 给code和pre加高亮
        highlightInit(hljs)
      })
    }
  }
}

</script>
<style lang="scss">
@import '~highlight.js/styles/github.css';
.markdown {
  h1 {
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
    color: #222;
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 24px;
    color: #222;
    font-weight: bold;
  }

  p {
    margin-top: 10px;
    color: #737373;
    &+p {
      margin-top: 5px;
    }
  }

  ul,
  ol {
    margin-top: 10px;
  }

  li {
    a {
      color: #737373;
    }
  }
  pre,
  code {
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: sfmono-regular, Consolas, "liberation mono";
  }
  table {
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    color: #656b78;
    th,
    td {
      border: 1px solid #e8e8e8;
      padding: 10px 12px;
      text-align: left;
    }
  }
}

</style>
