# Нетология
## «Символы, итераторы, генераторы»

[Домашнее задание 1](https://github.com/netology-code/ajs-homeworks/tree/ajs8/symbols-iterators-generators)

## Описание установки

```shell
npm init
npm install --save-dev jest babel-jest @babel/core @babel/cli @babel/preset-env
npm install core-js@3
```

## Описание

В этом задании предполагается, что все персонажи содержат следующий набор полей:
```javascript
const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}
```

## Символы & итераторы

### Легенда

Для поддержки логики необходимо сделать объекты класса `Team`(команда, в которой хранятся персонажи противника на текущий раунд) итерируемыми. При итерации они должны выдавать персонажей.

### Описание

Реализуйте итератор в классе `Team`, который по одному выдаёт персонажей (объекты типа `Person`).
