/* Data for the "Mémo" side panel: a searchable Python syntax reference.
   Each row: code as a student would type it, and its effect in French and English.
   When a row ends with "→ value", value is exactly what Python gives. */
window.PY_MEMO = [
  { id: "calculs", title: { fr: "Calculs", en: "Arithmetic" }, lesson: "l01", rows: [
    { code: "3.2 + 5", fr: "le point remplace la virgule → 8.2", en: "decimals use a point → 8.2" },
    { code: "30 / 5", fr: "division : toujours un float → 6.0", en: "division: always a float → 6.0" },
    { code: "2 ** 5", fr: "puissance 2⁵ → 32", en: "power 2⁵ → 32" },
    { code: "23 // 7", fr: "quotient euclidien → 3", en: "integer quotient → 3" },
    { code: "23 % 7", fr: "reste de la division euclidienne → 2", en: "remainder of the division → 2" },
    { code: "n % 2 == 0", fr: "vrai quand n est pair", en: "true when n is even" },
    { code: "0.1 + 0.2", fr: "les décimaux sont stockés de façon approchée → 0.30000000000000004", en: "decimals are stored as approximations → 0.30000000000000004" }
  ] },
  { id: "variables", title: { fr: "Variables, types et conversions", en: "Variables, types and conversions" }, lesson: "l02", rows: [
    { code: "a = 5", fr: "affectation : a reçoit 5 (en algorithmique, a ← 5)", en: "assignment: a receives 5 (in algorithms, a ← 5)" },
    { code: "a = a + 1", fr: "calcule la droite avec l'ancienne valeur, puis la range dans a", en: "computes the right side with the old value, then stores it in a" },
    { code: "type(7.3)", fr: "type d'un objet → <class 'float'>", en: "type of an object → <class 'float'>" },
    { code: "int(3.9)", fr: "conversion en entier : tronque, n'arrondit pas → 3", en: "convert to integer: truncates, doesn't round → 3" },
    { code: "str(7)", fr: "conversion en chaîne → '7'", en: "convert to string → '7'" },
    { code: "c = a\na = b\nb = c", fr: "échanger les valeurs de a et b avec une troisième variable", en: "swap the values of a and b using a third variable" }
  ] },
  { id: "tests", title: { fr: "Tests et booléens", en: "Tests and booleans" }, lesson: "l03", rows: [
    { code: "2 == 3", fr: "égalité (== compare, = affecte) → False", en: "equality (== compares, = assigns) → False" },
    { code: "2 != 3", fr: "différent de → True", en: "not equal → True" },
    { code: "2 == 3 or 2 < 3", fr: "or : vrai si au moins un des deux est vrai → True", en: "or: true if at least one is true → True" },
    { code: "2 == 3 and 2 < 3", fr: "and : vrai si les deux sont vrais → False", en: "and: true if both are true → False" },
    { code: "not (3 < 4)", fr: "not inverse un booléen → False", en: "not flips a boolean → False" },
    { code: "8 in [5, 6, 1, 4]", fr: "appartenance à une liste → False", en: "membership in a list → False" }
  ] },
  { id: "si", title: { fr: "Si… alors… sinon", en: "If… then… else" }, lesson: "l04", rows: [
    { code: "if n % 2 == 0:\n    print(\"pair\")", fr: "si la condition est vraie, le bloc décalé s'exécute", en: "if the condition is true, the indented block runs" },
    { code: "if a < 10:\n    a = a + 1\nelse:\n    a = a - 1", fr: "else : le bloc exécuté quand la condition est fausse", en: "else: the block that runs when the condition is false" },
    { code: "if note >= 16:\n    print(\"Très bien\")\nelif note >= 14:\n    print(\"Bien\")", fr: "elif (else + if) : seul le premier cas vrai s'exécute", en: "elif (else + if): only the first true case runs" }
  ] },
  { id: "for", title: { fr: "Boucle for et range", en: "The for loop and range" }, lesson: "l05", rows: [
    { code: "list(range(4))", fr: "de 0 à 4, 4 exclu → [0, 1, 2, 3]", en: "from 0 to 4, 4 excluded → [0, 1, 2, 3]" },
    { code: "list(range(2, 15, 3))", fr: "avec un pas de 3 → [2, 5, 8, 11, 14]", en: "in steps of 3 → [2, 5, 8, 11, 14]" },
    { code: "list(range(5, 2, -1))", fr: "à reculons → [5, 4, 3]", en: "counting down → [5, 4, 3]" },
    { code: "for k in range(4):\n    print(k)", fr: "boucle bornée : k vaut 0, puis 1, 2, 3", en: "bounded loop: k takes the values 0, 1, 2, 3" },
    { code: "s = 0\nfor k in range(1, 101):\n    s = s + k", fr: "accumulateur : somme 1 + 2 + … + 100 → s = 5050", en: "accumulator: sum 1 + 2 + … + 100 → s = 5050" },
    { code: "p = 1\nfor k in range(1, n + 1):\n    p = p * k", fr: "un produit part de 1 : ici p = n!", en: "a product starts at 1: here p = n!" }
  ] },
  { id: "while", title: { fr: "Boucle while", en: "The while loop" }, lesson: "l06", rows: [
    { code: "while a < 20:\n    a = 1.5 * a", fr: "boucle non bornée : répète tant que la condition est vraie", en: "unbounded loop: repeats as long as the condition is true" },
    { code: "n = 1\nwhile 2 ** n < 1000:\n    n = n + 1", fr: "seuil : plus petit n tel que 2ⁿ ≥ 1000 → n = 10", en: "threshold: smallest n such that 2ⁿ ≥ 1000 → n = 10" },
    { code: "1e-5 == 10 ** -5", fr: "deux écritures de 10⁻⁵ → True", en: "two ways to write 10⁻⁵ → True" }
  ] },
  { id: "fonctions", title: { fr: "Fonctions", en: "Functions" }, lesson: "l07", rows: [
    { code: "def f(x):\n    return x ** 2 + 1", fr: "définir une fonction : antécédent x, image x² + 1", en: "define a function: input x, output x² + 1" },
    { code: "f(3)", fr: "appeler la fonction → 10", en: "call the function → 10" },
    { code: "def moy(x, y, z):\n    m = 1/3 * (x + y + z)\n    return round(m, 2)", fr: "plusieurs paramètres ; return renvoie l'image et arrête la fonction", en: "several parameters; return gives the output and stops the function" },
    { code: "def div(a, b):\n    return a // b, a % b", fr: "renvoyer plusieurs valeurs (un tuple)", en: "return several values (a tuple)" },
    { code: "q, r = div(23, 7)", fr: "récupérer les deux valeurs : q = 3 et r = 2", en: "unpack both values: q = 3 and r = 2" },
    { code: "def est_pair(n):\n    return n % 2 == 0", fr: "fonction booléenne : renvoie True ou False", en: "boolean function: returns True or False" },
    { code: "print(\"le chat\")", fr: "affiche un message à l'écran (print ne renvoie rien). Dans une fonction, préfère return ; dans la console, la valeur d'une ligne s'affiche seule", en: "displays a message on screen (print returns nothing). In a function, prefer return; in the console, a line's value is shown on its own" },
    { code: "abs(-3.4)", fr: "valeur absolue → 3.4", en: "absolute value → 3.4" },
    { code: "round(22 / 7, 2)", fr: "arrondi à 2 chiffres après la virgule → 3.14", en: "rounded to 2 decimal places → 3.14" },
    { code: "max(1, 5.3, -1)", fr: "le plus grand (min : le plus petit) → 5.3", en: "the largest (min: the smallest) → 5.3" },
    { code: "len(\"chat\")", fr: "longueur d'une chaîne ou d'une liste → 4", en: "length of a string or a list → 4" }
  ] },
  { id: "listes", title: { fr: "Listes", en: "Lists" }, lesson: "l08", rows: [
    { code: "L = [12, 3.7, True, \"demain\", [1, 2]]", fr: "liste d'objets de natures différentes", en: "list of objects of different kinds" },
    { code: "L[0]", fr: "le premier objet a l'index 0 → 12", en: "the first object has index 0 → 12" },
    { code: "L[-1]", fr: "le dernier objet → [1, 2]", en: "the last object → [1, 2]" },
    { code: "L[0] = 100", fr: "modifier l'objet d'index 0", en: "change the object at index 0" },
    { code: "[3, 7] + [-1, 2]", fr: "concaténation → [3, 7, -1, 2]", en: "joining lists → [3, 7, -1, 2]" },
    { code: "sum([1, 2, 5.7])", fr: "somme des éléments → 8.7", en: "sum of the elements → 8.7" },
    { code: "sorted([1, 3, 2])", fr: "copie triée, la liste de départ ne change pas → [1, 2, 3]", en: "sorted copy, the original list doesn't change → [1, 2, 3]" },
    { code: "del L[4]", fr: "supprime l'objet d'index 4", en: "deletes the object at index 4" },
    { code: "for k in L:\n    print(k)", fr: "parcourir les éléments", en: "loop over the elements" },
    { code: "for i in range(len(L)):\n    print(i, L[i])", fr: "parcourir les index (quand la position compte)", en: "loop over the indexes (when the position matters)" },
    { code: "L = []\nfor k in range(5):\n    L.append(k ** 2)", fr: "créer par ajouts successifs → L = [0, 1, 4, 9, 16]", en: "build by successive appends → L = [0, 1, 4, 9, 16]" }
  ] },
  { id: "comprehension", title: { fr: "Compréhension et découpage", en: "Comprehensions and slicing" }, lesson: "comp", rows: [
    { code: "[k ** 2 for k in range(5)]", fr: "liste en compréhension → [0, 1, 4, 9, 16]", en: "list comprehension → [0, 1, 4, 9, 16]" },
    { code: "[x for x in range(30) if x % 7 == 0]", fr: "avec une condition → [0, 7, 14, 21, 28]", en: "with a condition → [0, 7, 14, 21, 28]" },
    { code: "T = [10, 20, 30, 40, 50]\nT[1:3]", fr: "découpage : de l'index 1 à 3, 3 exclu → [20, 30]", en: "slice: from index 1 to 3, 3 excluded → [20, 30]" },
    { code: "T[:2]", fr: "du début à l'index 2 exclu → [10, 20]", en: "from the start to index 2, excluded → [10, 20]" },
    { code: "T[::-1]", fr: "à l'envers → [50, 40, 30, 20, 10]", en: "reversed → [50, 40, 30, 20, 10]" }
  ] },
  { id: "methodes", title: { fr: "Méthodes des listes", en: "List methods" }, lesson: "l09", rows: [
    { code: "L = [1, 2, 3]\nL.append(4)", fr: "ajoute en fin de liste → L = [1, 2, 3, 4]", en: "adds at the end of the list → L = [1, 2, 3, 4]" },
    { code: "L = [1, 3, 5, 2, 7, 2, 9]\nL.remove(2)", fr: "supprime le premier 2 rencontré → L = [1, 3, 5, 7, 2, 9]", en: "removes the first 2 found → L = [1, 3, 5, 7, 2, 9]" },
    { code: "L = [1, 3, 5, 2, 7, 2, 9]\nL.pop(2)", fr: "supprime l'objet d'index 2 et le renvoie → 5", en: "removes the object at index 2 and returns it → 5" },
    { code: "[5, 3, 7, 3, 3].count(3)", fr: "nombre d'occurrences → 3", en: "number of occurrences → 3" },
    { code: "[5, 1, 6, 7, 6].index(7)", fr: "index du premier 7 → 3", en: "index of the first 7 → 3" },
    { code: "L = [3, 1, 5, 2]\nL.sort()", fr: "trie L elle-même (renvoie None) → L = [1, 2, 3, 5]", en: "sorts L itself (returns None) → L = [1, 2, 3, 5]" }
  ] },
  { id: "chaines", title: { fr: "Chaînes de caractères", en: "Strings" }, lesson: "chaines", rows: [
    { code: "mot = \"python\"\nmot[0]", fr: "première lettre → 'p'", en: "first letter → 'p'" },
    { code: "mot[1:4]", fr: "découpage → 'yth'", en: "slice → 'yth'" },
    { code: "mot[::-1]", fr: "à l'envers → 'nohtyp'", en: "reversed → 'nohtyp'" },
    { code: "for c in mot:\n    print(c)", fr: "parcourir les lettres une par une", en: "loop over the letters one by one" },
    { code: "\"ab\" + \"cd\"", fr: "concaténation → 'abcd'", en: "joining strings → 'abcd'" },
    { code: "\"le chat noir\".split()", fr: "découper en mots → ['le', 'chat', 'noir']", en: "split into words → ['le', 'chat', 'noir']" },
    { code: "\"banane\".replace(\"a\", \"o\")", fr: "remplacer → 'bonone'", en: "replace → 'bonone'" },
    { code: "\"banane\".count(\"a\")", fr: "compter → 2", en: "count → 2" },
    { code: "\"banane\".find(\"n\")", fr: "position de la première occurrence → 2", en: "position of the first occurrence → 2" },
    { code: "\"réglisse\".upper()", fr: "en majuscules (lower : en minuscules) → 'RÉGLISSE'", en: "uppercase (lower: lowercase) → 'RÉGLISSE'" },
    { code: "int(\"7\") + 1", fr: "d'une chaîne vers un entier (str(7) : l'inverse) → 8", en: "from a string to an integer (str(7): the reverse) → 8" },
    { code: "n = 3\nf\"u({n}) = {2 * n}\"", fr: "f-string : les accolades sont remplacées par leur valeur → 'u(3) = 6'", en: "f-string: the braces are replaced by their value → 'u(3) = 6'" }
  ] },
  { id: "modules", title: { fr: "Modules math et random", en: "The math and random modules" }, lesson: "l10", rows: [
    { code: "from math import sqrt, cos", fr: "importe seulement sqrt et cos", en: "imports only sqrt and cos" },
    { code: "from math import *", fr: "importe tout le module : le plus simple", en: "imports the whole module: the simplest" },
    { code: "import math\nmath.sqrt(36)", fr: "on précise le module devant la fonction → 6.0", en: "the module name goes before the function → 6.0" },
    { code: "from math import sqrt as r\nr(36)", fr: "importer en renommant → 6.0", en: "import under a new name → 6.0" },
    { code: "sqrt(16)", fr: "racine carrée (toujours un float) → 4.0", en: "square root (always a float) → 4.0" },
    { code: "pi", fr: "le nombre π → 3.141592653589793", en: "the number π → 3.141592653589793" },
    { code: "exp(1)", fr: "exponentielle : e¹ → 2.718281828459045", en: "exponential: e¹ → 2.718281828459045" },
    { code: "cos(pi)", fr: "cosinus, angle en radians (aussi sin, tan) → -1.0", en: "cosine, angle in radians (also sin, tan) → -1.0" },
    { code: "floor(-3.2)", fr: "partie entière → -4", en: "floor (integer part) → -4" },
    { code: "gcd(12, 18)", fr: "PGCD → 6", en: "greatest common divisor → 6" },
    { code: "from random import *\nrandom()", fr: "flottant au hasard dans [0 ; 1[", en: "random float in [0 ; 1[" },
    { code: "randint(1, 6)", fr: "entier au hasard entre 1 et 6, les deux inclus", en: "random integer between 1 and 6, both included" },
    { code: "choice([\"pile\", \"face\"])", fr: "un élément de la liste au hasard", en: "a random element of the list" }
  ] },
  { id: "graphiques", title: { fr: "Graphiques", en: "Plotting" }, lesson: "l12", rows: [
    { code: "import matplotlib.pyplot as plt", fr: "importer le module de graphiques sous le nom plt", en: "import the plotting module as plt" },
    { code: "plt.plot(X, Y)\nplt.show()", fr: "relie les points (X[i] ; Y[i]), puis affiche le graphique", en: "joins the points (X[i] ; Y[i]), then shows the graph" },
    { code: "plt.plot(N, U, \"o\")", fr: "des points seuls, sans les relier (pour une suite)", en: "points only, not joined (for a sequence)" },
    { code: "plt.plot(X, Y, \"r--\", label=\"f\")", fr: "ligne rouge en tirets, nommée f dans la légende", en: "red dashed line, named f in the legend" },
    { code: "plt.scatter(X, Y)", fr: "nuage de points", en: "scatter plot" },
    { code: "plt.bar(faces, effectifs)", fr: "diagramme en bâtons", en: "bar chart" },
    { code: "plt.hist(notes, bins=5)", fr: "histogramme en 5 classes", en: "histogram with 5 bins" },
    { code: "plt.axhline(10, color=\"r\")", fr: "droite horizontale y = 10 (axvline : verticale)", en: "horizontal line y = 10 (axvline: vertical)" },
    { code: "plt.xlabel(\"x\")\nplt.ylabel(\"y\")\nplt.title(\"Titre\")", fr: "noms des axes et titre", en: "axis labels and title" },
    { code: "plt.grid()\nplt.legend()", fr: "quadrillage et légende", en: "grid and legend" },
    { code: "X = [-2 + k * 0.1 for k in range(41)]\nY = [f(x) for x in X]", fr: "pas de numpy dans l'appli : abscisses et images en compréhension", en: "no numpy in the app: x values and images as comprehensions" }
  ] },
  { id: "erreurs", title: { fr: "Erreurs fréquentes", en: "Common mistakes" }, lesson: "l03", rows: [
    { code: "if a = 5:\n    print(a)", error: true, fr: "SyntaxError : = affecte, == compare. Écris if a == 5:", en: "SyntaxError: = assigns, == compares. Write if a == 5:" },
    { code: "if a < 10\n    a = a + 1", error: true, fr: "SyntaxError : il manque les deux points à la fin de la ligne", en: "SyntaxError: the colon is missing at the end of the line" },
    { code: "if a < 10:\na = a + 1", error: true, fr: "IndentationError : le bloc doit être décalé de 4 espaces", en: "IndentationError: the block must be indented by 4 spaces" },
    { code: "list(range(1, 5))", fr: "range exclut la borne de droite : 5 n'y est pas → [1, 2, 3, 4]", en: "range excludes the right bound: 5 isn't there → [1, 2, 3, 4]" },
    { code: "6 / 3", fr: "/ donne toujours un float ; pour un entier, utilise // → 2.0", en: "/ always gives a float; for an integer, use // → 2.0" },
    { code: "round(3.9)", fr: "pour arrondir, round (int(3.9) tronque et donne 3) → 4", en: "to round, use round (int(3.9) truncates and gives 3) → 4" },
    { code: "L = [3, 1, 2]\nM = L.sort()\nprint(M)", fr: "sort() trie L mais ne renvoie rien : M vaut None → None", en: "sort() sorts L but returns nothing: M is None → None" },
    { code: "sqrt(16)", error: true, fr: "NameError : sqrt n'a pas été importée. Ajoute from math import sqrt", en: "NameError: sqrt wasn't imported. Add from math import sqrt" },
    { code: "L = [1, 2, 3]\nL[3]", error: true, fr: "IndexError : une liste de n éléments a des index de 0 à n − 1", en: "IndexError: a list of n elements has indexes 0 to n − 1" },
    { code: "\"âge : \" + 17", error: true, fr: "TypeError : on n'additionne pas une chaîne et un nombre. Utilise str(17) ou une f-string", en: "TypeError: you can't add a string and a number. Use str(17) or an f-string" }
  ] }
];
