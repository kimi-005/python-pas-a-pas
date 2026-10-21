(window.PY_LESSONS = window.PY_LESSONS || []).push({
  id: "l11", num: 14, track: "maths",
  title: { fr: "Suites, sommes, dichotomie, simulations", en: "Sequences, sums, bisection, simulations" },
  intro: {
    fr: "Les algorithmes du programme de maths, écrits sous forme de fonctions Python : calculer un terme, une somme, trouver un seuil, encadrer une solution, simuler une expérience aléatoire.",
    en: "The algorithms from the maths syllabus, written as Python functions: compute a term, a sum, find a threshold, bracket a solution, simulate a random experiment."
  },
  blocks: [
    { t: "h", fr: "Calculer un terme d'une suite", en: "Computing a term of a sequence" },
    { t: "p",
      fr: "Pour une suite définie par récurrence, on part de u<sub>0</sub> et on applique la relation n fois. Exemple : u<sub>0</sub> = 5 et u<sub>n+1</sub> = 0,8u<sub>n</sub> + 2.",
      en: "For a sequence defined by recurrence, start from u<sub>0</sub> and apply the rule n times. Example: u<sub>0</sub> = 5 and u<sub>n+1</sub> = 0.8u<sub>n</sub> + 2." },
    { t: "code", code: "def u(n):\n    terme = 5\n    for k in range(n):\n        terme = 0.8 * terme + 2\n    return terme\n\nu(1), u(2), u(10), u(50)" },
    { t: "p",
      fr: "Les termes semblent se rapprocher de 10 : on conjecture que la suite converge vers 10.",
      en: "The terms seem to get closer to 10: we conjecture that the sequence converges to 10." },

    { t: "h", fr: "Calculer une somme Σ", en: "Computing a sum Σ" },
    { t: "p",
      fr: "Pour S<sub>n</sub> = u<sub>0</sub> + u<sub>1</sub> + … + u<sub>n</sub>, on utilise un accumulateur qui part de 0. Exemple : S<sub>n</sub> = 1 + ½ + ¼ + … + (½)<sup>n</sup>.",
      en: "For S<sub>n</sub> = u<sub>0</sub> + u<sub>1</sub> + … + u<sub>n</sub>, use an accumulator starting at 0. Example: S<sub>n</sub> = 1 + ½ + ¼ + … + (½)<sup>n</sup>." },
    { t: "code", code: "def S(n):\n    s = 0\n    for k in range(n + 1):\n        s = s + 0.5 ** k\n    return s\n\nS(3), S(10), S(30)" },

    { t: "h", fr: "Encadrer une solution : la dichotomie", en: "Bracketing a solution: bisection" },
    { t: "p",
      fr: "On cherche la solution de f(x) = 0 sur [a ; b], où f change de signe. À chaque étape, on coupe l'intervalle en deux au milieu m, et on garde la moitié où f change de signe. L'amplitude est divisée par 2 à chaque tour.",
      en: "We look for the solution of f(x) = 0 on [a ; b], where f changes sign. At each step, cut the interval in half at its midpoint m, and keep the half where f changes sign. The width is halved on every pass." },
    { t: "compare",
      algo: { fr: "Tant que b − a > p :\n    m ← (a + b) / 2\n    Si f(a) × f(m) ≤ 0 :\n        b ← m\n    Sinon :\n        a ← m\nFin Tant que",
              en: "While b − a > p:\n    m ← (a + b) / 2\n    If f(a) × f(m) ≤ 0:\n        b ← m\n    Else:\n        a ← m\nEnd While" },
      code: "def f(x):\n    return x ** 3 - x - 1\n\na = 1\nb = 2\nwhile b - a > 0.001:\n    m = (a + b) / 2\n    if f(a) * f(m) <= 0:\n        b = m\n    else:\n        a = m\na, b",
      run: true,
      caption: { fr: "f(a) × f(m) ≤ 0 signifie que f(a) et f(m) sont de signes contraires : la solution est entre a et m.",
                 en: "f(a) × f(m) ≤ 0 means f(a) and f(m) have opposite signs: the solution lies between a and m." } },

    { t: "h", fr: "Simuler une expérience aléatoire", en: "Simulating a random experiment" },
    { t: "p",
      fr: "On répète une expérience un grand nombre de fois avec <code>random</code>, et on observe la fréquence d'un événement. Exemple : on lance deux dés et on compte combien de fois la somme vaut 7.",
      en: "Repeat an experiment many times with <code>random</code>, and look at how often an event happens. Example: roll two dice and count how often the sum is 7." },
    { t: "code", code: "from random import randint\n\nn = 10000\nc = 0\nfor k in range(n):\n    if randint(1, 6) + randint(1, 6) == 7:\n        c = c + 1\nc / n\n6 / 36" }
  ],
  exercises: [
    { t: "predict", id: "l11-p1",
      title: { fr: "Faire tourner à la main", en: "Run it by hand" },
      items: [
        { code: "u = 2\nfor k in range(2):\n    u = 3 * u - 1\nu" },
        { code: "s = 0\nfor k in range(1, 4):\n    s = s + k ** 2\ns" },
        { code: "L = [1]\nfor k in range(3):\n    L.append(2 * L[-1])\nL",
          note: { fr: "L[-1] est le dernier terme ajouté : chaque terme est le double du précédent.", en: "L[-1] is the last term added: each term is twice the previous one." } },
        { code: "a = 0\nb = 8\nwhile b - a > 1:\n    m = (a + b) / 2\n    b = m\nb",
          note: { fr: "8 → 4 → 2 → 1 : la boucle s'arrête quand b − a ≤ 1. Comme <code>/</code> donne un float, Python écrit 1.0.", en: "8 → 4 → 2 → 1: the loop stops when b − a ≤ 1. Since <code>/</code> gives a float, Python writes 1.0." } },
        { code: "from random import random\nx = random()\n0 <= x and x < 1" }
      ] },
    {
      "t": "fill",
      "id": "l11-f1",
      "title": {
        "fr": "Les poissons du lac",
        "en": "The fish in the lake"
      },
      "prompt": {
        "fr": "Un lac contient 1 000 poissons. Chaque année, 10 % des poissons disparaissent et on en réintroduit 50. On note u<sub>n</sub> le nombre de poissons au bout de n années : u<sub>n+1</sub> = 0,9u<sub>n</sub> + 50. Complète <code>u(n)</code>, puis <code>annee_sous(A)</code>, qui renvoie le premier rang n tel que u<sub>n</sub> &lt; A.",
        "en": "A lake holds 1,000 fish. Each year, 10 % of the fish disappear and 50 are put back. Let u<sub>n</sub> be the number of fish after n years: u<sub>n+1</sub> = 0.9u<sub>n</sub> + 50. Fill in <code>u(n)</code>, then <code>annee_sous(A)</code>, which returns the first n such that u<sub>n</sub> &lt; A."
      },
      "template": "def u(n):\n    terme = {{1000}}\n    for k in range({{n}}):\n        terme = {{0.9 * terme + 50}}\n    return terme\n\ndef annee_sous(A):\n    n = 0\n    while {{u(n) >= A}}:\n        n = n + 1\n    return n",
      "tests": [
        {
          "call": "u(0)",
          "expect": "1000"
        },
        {
          "call": "u(1)",
          "expect": "950.0"
        },
        {
          "call": "u(2)",
          "expect": "905.0"
        },
        {
          "call": "annee_sous(900)",
          "expect": "3"
        },
        {
          "call": "annee_sous(600)",
          "expect": "16"
        }
      ],
      "hints": [
        {
          "fr": "u(n) part de u<sub>0</sub> = 1000 et applique la relation de récurrence n fois.",
          "en": "u(n) starts from u<sub>0</sub> = 1000 and applies the recurrence relation n times."
        },
        {
          "fr": "C'est un algorithme de seuil : on augmente n <em>tant que</em> u(n) ≥ A.",
          "en": "It's a threshold algorithm: increase n <em>as long as</em> u(n) ≥ A."
        }
      ],
      "after": {
        "fr": "La suite décroît vers 500 : c'est la solution de ℓ = 0,9ℓ + 50. Le seuil A doit donc être supérieur à 500, sinon la boucle ne s'arrêterait jamais.",
        "en": "The sequence decreases towards 500: the solution of ℓ = 0.9ℓ + 50. So the threshold A must be greater than 500, otherwise the loop would never stop."
      }
    },
    { t: "code", id: "l11-c1",
      title: { fr: "Terme d'une suite arithmético-géométrique", en: "Term of an arithmetic-geometric sequence" },
      prompt: { fr: "Écris la fonction <code>u(n)</code> qui renvoie le terme u<sub>n</sub> de la suite définie par u<sub>0</sub> = 5 et u<sub>n+1</sub> = 0,8u<sub>n</sub> + 2.",
                en: "Write the function <code>u(n)</code> that returns the term u<sub>n</sub> of the sequence defined by u<sub>0</sub> = 5 and u<sub>n+1</sub> = 0.8u<sub>n</sub> + 2." },
      starter: { fr: "def u(n):\n    terme = 5\n    ", en: "def u(n):\n    terme = 5\n    " },
      tests: [
        { call: "u(0)", expect: "5" },
        { call: "u(1)", expect: "6.0" },
        { call: "u(2)", expect: "6.8" },
        { call: "u(10)", expect: "9.463129088" }
      ],
      require: ["for", "return"],
      hint: { fr: "Répète n fois <code>terme = 0.8 * terme + 2</code>, puis <code>return terme</code>.", en: "Repeat n times <code>terme = 0.8 * terme + 2</code>, then <code>return terme</code>." },
      solution: "def u(n):\n    terme = 5\n    for k in range(n):\n        terme = 0.8 * terme + 2\n    return terme" },
    { t: "code", id: "l11-c2",
      title: { fr: "Seuil d'une suite croissante", en: "Threshold of an increasing sequence" },
      prompt: { fr: "La suite précédente est croissante et converge vers 10. Écris <code>seuil(A)</code> qui renvoie le plus petit entier n tel que u<sub>n</sub> &gt; A (avec A &lt; 10).",
                en: "The previous sequence increases and converges to 10. Write <code>seuil(A)</code> that returns the smallest integer n such that u<sub>n</sub> &gt; A (with A &lt; 10)." },
      starter: { fr: "def seuil(A):\n    n = 0\n    terme = 5\n    ", en: "def seuil(A):\n    n = 0\n    terme = 5\n    " },
      tests: [
        { call: "seuil(9)", expect: "8" },
        { call: "seuil(9.9)", expect: "18" },
        { call: "seuil(5)", expect: "1" },
        { call: "seuil(4)", expect: "0" }
      ],
      require: ["while", "return"],
      hint: { fr: "<code>while terme <= A:</code> puis calcule le terme suivant et ajoute 1 à n. Après la boucle, <code>return n</code>.",
              en: "<code>while terme <= A:</code> then compute the next term and add 1 to n. After the loop, <code>return n</code>." },
      solution: "def seuil(A):\n    n = 0\n    terme = 5\n    while terme <= A:\n        terme = 0.8 * terme + 2\n        n = n + 1\n    return n" },
    { t: "code", id: "l11-c3",
      title: { fr: "Une somme qui tend vers 2", en: "A sum that tends to 2" },
      prompt: { fr: "Écris <code>somme(n)</code> qui renvoie S<sub>n</sub> = 1 + ½ + ¼ + … + (½)<sup>n</sup>, sans utiliser <code>sum</code>.",
                en: "Write <code>somme(n)</code> that returns S<sub>n</sub> = 1 + ½ + ¼ + … + (½)<sup>n</sup>, without using <code>sum</code>." },
      starter: { fr: "def somme(n):\n    s = 0\n    ", en: "def somme(n):\n    s = 0\n    " },
      tests: [
        { call: "somme(0)", expect: "1" },
        { call: "somme(3)", expect: "1.875" },
        { call: "somme(20)", expect: "1.9999990463256836" }
      ],
      require: ["for", "return"], forbid: ["sum"],
      hint: { fr: "Les termes sont 0.5 ** k pour k allant de 0 à n : <code>for k in range(n + 1):</code>.", en: "The terms are 0.5 ** k for k from 0 to n: <code>for k in range(n + 1):</code>." },
      solution: "def somme(n):\n    s = 0\n    for k in range(n + 1):\n        s = s + 0.5 ** k\n    return s",
      after: { fr: "C'est la somme des termes d'une suite géométrique de raison ½ : S<sub>n</sub> = 2 − (½)<sup>n</sup>, qui tend vers 2.",
               en: "This is the sum of a geometric sequence with ratio ½: S<sub>n</sub> = 2 − (½)<sup>n</sup>, which tends to 2." } },
    { t: "code", id: "l11-c4",
      title: { fr: "Encadrer √2 par dichotomie", en: "Bracketing √2 by bisection" },
      prompt: { fr: "√2 est la solution positive de x² − 2 = 0. Écris <code>dichotomie(p)</code> qui part de a = 1 et b = 2 et renvoie la liste <code>[a, b]</code> quand b − a ≤ p.",
                en: "√2 is the positive solution of x² − 2 = 0. Write <code>dichotomie(p)</code> that starts from a = 1 and b = 2 and returns the list <code>[a, b]</code> once b − a ≤ p." },
      starter: { fr: "def f(x):\n    return x ** 2 - 2\n\ndef dichotomie(p):\n    a = 1\n    b = 2\n    ", en: "def f(x):\n    return x ** 2 - 2\n\ndef dichotomie(p):\n    a = 1\n    b = 2\n    " },
      tests: [
        { helper: "def _encadre(r, p):\n    a, b = r\n    return a <= 2 ** 0.5 <= b and b - a <= p", call: "_encadre(dichotomie(0.1), 0.1)", expect: "True", desc: { fr: "dichotomie(0.1) encadre √2 avec une amplitude ≤ 0,1", en: "dichotomie(0.1) brackets √2 within a width ≤ 0.1" } },
        { helper: "def _encadre(r, p):\n    a, b = r\n    return a <= 2 ** 0.5 <= b and b - a <= p", call: "_encadre(dichotomie(0.000001), 0.000001)", expect: "True", desc: { fr: "dichotomie(0.000001) encadre √2 avec une amplitude ≤ 10⁻⁶", en: "dichotomie(0.000001) brackets √2 within a width ≤ 10⁻⁶" } },
        { call: "dichotomie(0.5)", expect: "[1, 1.5]" }
      ],
      require: ["while", "return"],
      hint: { fr: "Reprends l'algorithme de la leçon : <code>while b - a > p:</code>, le milieu <code>m = (a + b) / 2</code>, puis le test <code>if f(a) * f(m) <= 0:</code>. Après la boucle, <code>return [a, b]</code>.",
              en: "Use the algorithm from the lesson: <code>while b - a > p:</code>, the midpoint <code>m = (a + b) / 2</code>, then the test <code>if f(a) * f(m) <= 0:</code>. After the loop, <code>return [a, b]</code>." },
      solution: "def f(x):\n    return x ** 2 - 2\n\ndef dichotomie(p):\n    a = 1\n    b = 2\n    while b - a > p:\n        m = (a + b) / 2\n        if f(a) * f(m) <= 0:\n            b = m\n        else:\n            a = m\n    return [a, b]" },
    { t: "code", id: "l11-c5",
      title: { fr: "Estimer π au hasard (Monte-Carlo)", en: "Estimating π at random (Monte Carlo)" },
      prompt: { fr: "On choisit n points M(x ; y) au hasard dans le carré [0 ; 1] × [0 ; 1]. La proportion de points dans le quart de disque (x² + y² ≤ 1) est proche de π/4. Écris <code>estimation_pi(n)</code> qui renvoie 4 × cette proportion.",
                en: "Pick n random points M(x ; y) in the square [0 ; 1] × [0 ; 1]. The proportion of points inside the quarter disc (x² + y² ≤ 1) is close to π/4. Write <code>estimation_pi(n)</code> that returns 4 × that proportion." },
      starter: { fr: "from random import random\n\ndef estimation_pi(n):\n    c = 0\n    ", en: "from random import random\n\ndef estimation_pi(n):\n    c = 0\n    " },
      tests: [
        { call: "0 <= estimation_pi(100) <= 4", expect: "True", desc: { fr: "renvoie un nombre entre 0 et 4", en: "returns a number between 0 and 4" } },
        { call: "abs(estimation_pi(100000) - 3.14159) < 0.05", expect: "True", desc: { fr: "avec 100 000 points, le résultat est proche de π", en: "with 100,000 points, the result is close to π" } }
      ],
      require: ["for", "random", "return"],
      hint: { fr: "Dans la boucle : <code>x = random()</code>, <code>y = random()</code>, et si <code>x ** 2 + y ** 2 <= 1</code>, ajoute 1 à c. Pour finir, <code>return 4 * c / n</code>.",
              en: "In the loop: <code>x = random()</code>, <code>y = random()</code>, and if <code>x ** 2 + y ** 2 <= 1</code>, add 1 to c. At the end, <code>return 4 * c / n</code>." },
      solution: "from random import random\n\ndef estimation_pi(n):\n    c = 0\n    for k in range(n):\n        x = random()\n        y = random()\n        if x ** 2 + y ** 2 <= 1:\n            c = c + 1\n    return 4 * c / n",
      after: { fr: "Tu as réutilisé le test de la leçon 3 ! Dans la leçon 15, tu pourras dessiner ces points.",
               en: "You reused the test from lesson 3! In lesson 15 you'll be able to draw these points." } }
  ],
  challenges: [
    { t: "code", id: "l11-d1",
      title: { fr: "La méthode de Héron pour calculer √a", en: "Heron's method for √a" },
      prompt: { fr: "Pour approcher √a (a &gt; 0), on utilise la suite u<sub>0</sub> = a et u<sub>n+1</sub> = ½(u<sub>n</sub> + a / u<sub>n</sub>). 1) Écris <code>heron(a, n)</code> qui renvoie u<sub>n</sub>. 2) Écris <code>nb_etapes(a, eps)</code> qui renvoie le plus petit n tel que |u<sub>n</sub>² − a| &lt; eps.",
                en: "To approximate √a (a &gt; 0), use the sequence u<sub>0</sub> = a and u<sub>n+1</sub> = ½(u<sub>n</sub> + a / u<sub>n</sub>). 1) Write <code>heron(a, n)</code> that returns u<sub>n</sub>. 2) Write <code>nb_etapes(a, eps)</code> that returns the smallest n such that |u<sub>n</sub>² − a| &lt; eps." },
      starter: { fr: "def heron(a, n):\n    u = a\n    \n\ndef nb_etapes(a, eps):\n    u = a\n    n = 0\n    ", en: "def heron(a, n):\n    u = a\n    \n\ndef nb_etapes(a, eps):\n    u = a\n    n = 0\n    " },
      tests: [
        { call: "heron(2, 0)", expect: "2" },
        { call: "heron(2, 1)", expect: "1.5" },
        { call: "heron(2, 2)", expect: "1.4166666666666667" },
        { call: "heron(9, 10)", expect: "3.0" },
        { call: "nb_etapes(2, 0.01)", expect: "2" },
        { call: "nb_etapes(2, 1e-12)", expect: "5" },
        { call: "nb_etapes(1000000, 1)", expect: "13" }
      ],
      require: ["for", "while", "abs", "return"],
      hints: [
        { fr: "<code>heron</code> ressemble au calcul d'un terme de suite de la leçon : applique la relation n fois avec une boucle <code>for</code>.", en: "<code>heron</code> is like computing a term of a sequence in the lesson: apply the rule n times with a <code>for</code> loop." },
        { fr: "<code>nb_etapes</code> est un algorithme de seuil : une boucle <code>while</code> qui continue tant que l'écart est trop grand, en comptant les étapes.", en: "<code>nb_etapes</code> is a threshold algorithm: a <code>while</code> loop that keeps going while the gap is too big, counting the steps." },
        { fr: "<code>while abs(u ** 2 - a) >= eps:</code> puis <code>u = (u + a / u) / 2</code> et <code>n = n + 1</code>. Après la boucle, <code>return n</code>.", en: "<code>while abs(u ** 2 - a) >= eps:</code> then <code>u = (u + a / u) / 2</code> and <code>n = n + 1</code>. After the loop, <code>return n</code>." }
      ],
      solution: "def heron(a, n):\n    u = a\n    for k in range(n):\n        u = (u + a / u) / 2\n    return u\n\ndef nb_etapes(a, eps):\n    u = a\n    n = 0\n    while abs(u ** 2 - a) >= eps:\n        u = (u + a / u) / 2\n        n = n + 1\n    return n",
      after: { fr: "La méthode converge très vite : le nombre de décimales justes double presque à chaque étape. Ta calculatrice utilise une idée de ce genre.", en: "The method converges very fast: the number of correct decimals almost doubles at each step. Your calculator uses an idea like this." } },
    { t: "code", id: "l11-d2",
      title: { fr: "Le problème du duc de Toscane", en: "The Grand Duke of Tuscany's problem" },
      prompt: { fr: "Le duc de Toscane avait remarqué qu'en lançant trois dés, on obtient plus souvent une somme de 10 qu'une somme de 9. 1) Écris <code>proba_exacte(s)</code> qui renvoie la probabilité d'obtenir la somme s avec trois dés, en comptant les 216 résultats possibles avec trois boucles imbriquées. 2) Écris <code>frequence(s, n)</code> qui simule n lancers de trois dés et renvoie la fréquence de la somme s.",
                en: "The Grand Duke of Tuscany noticed that when rolling three dice, a sum of 10 comes up more often than a sum of 9. 1) Write <code>proba_exacte(s)</code> that returns the probability of getting the sum s with three dice, counting the 216 possible outcomes with three nested loops. 2) Write <code>frequence(s, n)</code> that simulates n rolls of three dice and returns how often the sum s comes up." },
      starter: { fr: "from random import randint\n\ndef proba_exacte(s):\n    c = 0\n    \n\ndef frequence(s, n):\n    c = 0\n    ", en: "from random import randint\n\ndef proba_exacte(s):\n    c = 0\n    \n\ndef frequence(s, n):\n    c = 0\n    " },
      tests: [
        { call: "proba_exacte(9)", expect: "25 / 216" },
        { call: "proba_exacte(10)", expect: "27 / 216" },
        { call: "proba_exacte(3)", expect: "1 / 216" },
        { call: "proba_exacte(19)", expect: "0" },
        { call: "abs(frequence(10, 20000) - 27 / 216) < 0.025", expect: "True", desc: { fr: "sur 20 000 lancers, la fréquence de 10 est proche de 27/216 ≈ 0,125", en: "over 20,000 rolls, the frequency of 10 is close to 27/216 ≈ 0.125" } }
      ],
      require: ["for", "randint", "return"],
      hints: [
        { fr: "Pour la probabilité exacte, tous les résultats (i ; j ; k) sont équiprobables : compte ceux dont la somme vaut s et divise par 216.", en: "For the exact probability, all outcomes (i ; j ; k) are equally likely: count those whose sum is s and divide by 216." },
        { fr: "Trois boucles imbriquées <code>for i in range(1, 7):</code>, <code>for j …</code>, <code>for k …</code>, et un test <code>if i + j + k == s:</code>.", en: "Three nested loops <code>for i in range(1, 7):</code>, <code>for j …</code>, <code>for k …</code>, and a test <code>if i + j + k == s:</code>." },
        { fr: "Pour la simulation : n fois, si <code>randint(1, 6) + randint(1, 6) + randint(1, 6) == s</code>, ajoute 1 à c. Puis <code>return c / n</code>.", en: "For the simulation: n times, if <code>randint(1, 6) + randint(1, 6) + randint(1, 6) == s</code>, add 1 to c. Then <code>return c / n</code>." }
      ],
      solution: "from random import randint\n\ndef proba_exacte(s):\n    c = 0\n    for i in range(1, 7):\n        for j in range(1, 7):\n            for k in range(1, 7):\n                if i + j + k == s:\n                    c = c + 1\n    return c / 216\n\ndef frequence(s, n):\n    c = 0\n    for t in range(n):\n        if randint(1, 6) + randint(1, 6) + randint(1, 6) == s:\n            c = c + 1\n    return c / n",
      after: { fr: "9 et 10 s'écrivent tous les deux de 6 façons comme somme de trois nombres de 1 à 6, mais 10 correspond à plus de résultats ordonnés (27 contre 25). Galilée a expliqué ce paradoxe vers 1620.", en: "9 and 10 can each be written in 6 ways as a sum of three numbers from 1 to 6, but 10 matches more ordered outcomes (27 against 25). Galileo explained this paradox around 1620." } }
  ]
});
