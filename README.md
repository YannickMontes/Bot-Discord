# Projet : Bot Discord

Pour conclure ce module de Backend Javascript, nous allons voir une partie un peu différente de ce que l’on a vu au début, mais tout en restant sur l’utilisation de Node.js, et des principes que nous avons exploré auparavant.

Par équipe de 5 maximum, vous allez devoir concevoir un petit bot pour Discord, qui pourra permettre aux utilisateurs d’exécuter plusieurs fonctionnalités. 

## 1. Introduction

### 1.1 Objectifs

Via la création d’un bot pour le logiciel de discussion Discord, nous allons pouvoir mettre en pratique plusieurs choses :
    • L’utilisation de packages existant sur npm (pour ne pas réinventer la roue)
    • Voir comment fonctionne un back-end ayant une haute interaction avec les utilisateurs
    • Mettre notre créativité au défi pour concevoir des petites fonctionnalités sympa sur le bot
    
### 1.2 La notation

La notation se fera sur 100 points.

## 2. Les fonctionnalités de base

Imaginons que vous vouliez utiliser votre bot à des fins de modérations, relativement basiques, permettant de kicker un utilisateur du serveur, de bannir un utilisateur, de timeout quelqu’un pour qu’il ne puisse pas parler, ect. Nous allons dans un premier temps implémenter ces commandes.

### 2.1 Définir un préfixe

Avant de commencer quoi que ce soit, nous aurons besoin de définir un **préfixe** qui nous permettra de différencier les messages normaux envoyés dans les channels, des messages contenant des commandes devant être interceptés par le bot.

Pour la suite de cet énnoncé, nous allons utiliser le préfixe **#**. 

### 2.2 La commande clear

L’objectif est de vider un channel discord d’un certain nombre de messages.

L'utilisation de la commande devra ressembler à ceci :

```
#clear <nbMessages>
```

Faites attention toutefois, Discord ne nous autorise à supprimer que seulement 100 messages à la fois.

Le bot peut renvoyer une réponse, ou pas, c'est à vous de choisir. 

### 2.3 La commande kick

Avec cette commande, nous allons pouvoir virer un utilisateur du serveur. Ce dernier pourra néanmoins toujours le rejoindre. 

La commande devra ressembler à ceci :

```
#kick @user <raison>
```

Il peut ne pas y avoir de raison au kick, ce n'est pas un problème. 

Le bot devra nous renvoyer une réponse, comme sur l'exemple ci-dessous : 

