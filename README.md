# Dojo JS "Variations sur la boucle for"

Donné le jeudi 15/03/2018, inspiré et adapté d'un [dojo donné à la WCS Paris](https://wildcodeschoolparis.github.io/dojos/02-eacheacheachmotherfuckingeach/).

## Programme du jour

* Utiliser la boucle `for..in` abordée lors du cours de lundi
* Utiliser la boucle `for..of`, présentée par ailleurs dans la quête "ES6 Partie 2".

## Enoncé

On va créer des objets qui décrivent les Wild Code School de France et de Navarre. Bon, en pratique on ne va pas toutes les passer en revue !

Chaque objet aura la forme :

```javascript
const schoolToulouse = {
	city: 'Toulouse',
	curriculums: ['Java/Android', 'JS/React'],
	students: 28
}
```

On va les mettre dans un tableau :

```
const schools = [
  schoolToulouse,
  // Les autres
]
```

**&Agrave; partir de ce tableau d'objets**, on veut, pour chaque objet du tableau, afficher *individuellement* chacune de ses propriétés.

## Rappel / doc sur les objets

Prenons un objet :

```javascript
let obj = {
    name: 'Goldorak',
    nationality: 'Japanese',
    'special-power': 'Cornofulgure'
}
```

Chaque propriété est constituée par une paire *clé*-*valeur*. On peut lire les propriétés de l'objet de cette façon, en donnant la *clé* entre crochets `[]` pour récupérer la *valeur* associée :

```javascript
console.log(obj['name'])
console.log(obj['special-power'])
```

Une syntaxe plus "légère" peut *généralement* être utilisée à la place :

```javascript
console.log(obj.name)
console.log(obj.nationality)
```

Mais ce n'est possible qu'à condition que la *clé* soit un *identifiant valide*, c'est à dire qu'elle remplisse les mêmes pré-requis qu'un nom de variable :

* Ne contenir que des lettres, chiffres ou le underscore `_`
* *Commencer par* une lettre ou `_`

Dans le cas présent, on ne pourrait pas utiliser la syntaxe `.` pour la propriété `'special-power'`.

On peut lire mais aussi écrire une propriété en utilisant l'une des deux syntaxes :

```javascript
obj.name = 'Goku'
obj['special-power'] = 'Kamehameha'
```

## Pour les objets : boucle `for..in`

`for` a différentes syntaxes. `for..in` est particulièrement utile pour parcourir les paires *clé-valeur* d'un objet.

```javascript
for(key in obj) {
    // Affiche la clé
    console.log(key)
    // Affiche la VALEUR associée à la clé
    console.log(obj[key])
}
```
Dans cette boucle, il faut être conscient qu'à chaque *itération* (passage dans la boucle), `key` prend la valeur d'une clé : dans le cas présent `key` vaudra la chaîne `'name'` à la 1ère itération, `'nationality'` à la 2ème , `'special-power'` à la 3ème.

Ayant la clé dans la variable `key`, on trouve la valeur associée via `obj[key]`.

> Remarque : on ne *pourrait pas* trouver la bonne valeur avec `obj.key` car cela reviendrait à chercher une clé nommée `'key'` dans `obj`.

## Pour les tableaux : boucle `for..of`

`for..of` permet de parcourir un tableau beaucoup plus aisément que le `for` originel, si on n'a pas besoin de l'index.

```javascript
const theBeatles = ['John', 'Paul', 'George', 'Ringo']
// Affiche successivement chaque membre du groupe
for(beatle of theBeatles) {
    console.log(beatle)
}
```