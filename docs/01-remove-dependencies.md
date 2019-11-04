# Como remover o Redux:

1- Remover do package.json a dependência "react-redux"

2- No arquivo app.js, remover o Provider do react-redux. Tanto o import quando o componente

```
import { Provider } from 'react-redux'

<Provider store={store}>
...
</Provider>
```

3- Remover o componente de exemplo com o Redux, deletando a pasta inteira.
Nome do componente: CounterConnect

4- Remover a pasta store
src/store

# Como remover o Redux Thunk:

1- No arquivo webpack.config.js, remover a parte do código que adiciona hash às classes

```
 modules: {
  localIdentName: '[name]_[local]' //remover
 }

```

2- Remover os imports de estilo dos arquivos JS. Exemplo:

```
import styles from './button.styl' //remover

const MainButton = ({ children }) => (
  <Button className={styles.customButton}> //remover styles.customButton 
    {children}
  </Button>
)

```

# Como remover o CSS Modules:

1- Remover do package.json a dependência "redux-thunk"

2- No arquivo src/store/index.js, remover o import e o uso do componente

```
import thunk from 'redux-thunk' //remover

applyMiddleware(thunk) // remover
```

# Como remover o Grimório (React UI Kit):

1- Remover do package.json a dependência "grimorio-ui"

2- Remover o import do css do Grimório em webpack.config.js

```
// antes

entry: {
  boilerplate: [
    path.resolve(
    __dirname,
    '../node_modules/grimorio-ui/dist/grimorio-ui.min.css'
    ),
    path.resolve(__dirname, '../src')
  ]
},

// depois

entry: {
  boilerplate: [
    path.resolve(__dirname, '../src')
  ]
},

```

3- Remover todos os imports de componente do Grimório. Exemplo:

```
import { Button } from 'grimorio-ui'

```
