import React from 'react'
import ReactDOM from 'react-dom'
import ReactTable from 'react-table'



const Header =(props) => (
    <header>
        <p>{props.title}</p>

    </header>
)

const Items = (props) => {
    console.log(props.items)
    return (
      <table>
    

                   {props.items.map(item => (
                 <tr>
                         <td>{item[0]} </td>

                         <td><img src={item[1]} alt="HTML5 Icon" width="120" height="120"/></td>
                         <td>{item[2]} </td>
                         <td>{item[3]} </td>
                         <td>{item[4]} </td>
                 </tr>
                 ))}


        </table>
    )
}

const Content = (props) => (
    <section>

        <Items items={props.items}/>
    </section>
)


const App = () => {
    const appTitle = 'Mypokedex'

    const items =[

    [ "01","001.png","Bulbasaur", "GRASS & POISON" ,"Tackle,Vine Whip"],
    [ "02","002.png","Ivysaur", "GRASS & POISON" ,"Razor Leaf,Vine Whip"],
    [ "03","003.png","Venusaur", "GRASS & POISON" ,"Razor Leaf,Vine Whip"],
    [ "04","004.png","Charmander",  "FIRE " ,"Scratch,Ember"],
    [ "05","005.png","Charmeleon",  "FIRE " ,"Scratch,Ember"],
    [ "06","006.png","Charizard", "FIRE & FLYING" ,"Wing Attack,Ember"],
    [ "07","007.png","Squirtle", "WATER" ,"Bite,Water Gun"],
    [ "08","008.png","Wartortle","WATER" ,"Bite,Water Gun"],
    [ "09","009.png","Blastoise", "WATER" ,"Bite,Water Gun"],
    [ "10","010.png","Caterpie", "BUG" ,"Tackle,Bug Bite"]
    ]
    return (
        <section>
            <Header title={appTitle} />
            <Content

            items={items}

            />
        </section>
    )
}

const element = document.getElementById('app')
ReactDOM.render(<App />, element)
