(window.PY_LESSONS = window.PY_LESSONS || []).push({
  id: "l12", num: 15, track: "maths",
  title: { fr: "Tracer des courbes", en: "Plotting graphs" },
  intro: {
    fr: "Avec le module <code>matplotlib.pyplot</code>, on trace la courbe d'une fonction, les termes d'une suite ou un diagramme en bâtons. Tout part de deux listes : les abscisses et les ordonnées.",
    en: "With the <code>matplotlib.pyplot</code> module, you can plot the graph of a function, the terms of a sequence or a bar chart. Everything starts from two lists: the x values and the y values."
  },
  blocks: [
    { t: "note",
      fr: "Dans cette appli, <code>matplotlib.pyplot</code> est une version simplifiée : <code>plot</code>, <code>scatter</code>, <code>bar</code>, <code>hist</code>, <code>title</code>, <code>xlabel</code>, <code>ylabel</code>, <code>grid</code>, <code>legend</code>, <code>xlim</code>, <code>ylim</code>, <code>axis</code>, <code>axhline</code>, <code>axvline</code>, <code>text</code> et <code>show</code>. Le module numpy n'est pas disponible : on fabrique les listes avec une boucle.",
      en: "In this app, <code>matplotlib.pyplot</code> is a simplified version: <code>plot</code>, <code>scatter</code>, <code>bar</code>, <code>hist</code>, <code>title</code>, <code>xlabel</code>, <code>ylabel</code>, <code>grid</code>, <code>legend</code>, <code>xlim</code>, <code>ylim</code>, <code>axis</code>, <code>axhline</code>, <code>axvline</code>, <code>text</code> and <code>show</code>. The numpy module isn't available: build your lists with a loop." },

    { t: "h", fr: "Le principe : deux listes", en: "The idea: two lists" },
    { t: "p",
      fr: "<code>plt.plot(X, Y)</code> place les points (X[0] ; Y[0]), (X[1] ; Y[1]), … et les relie. <code>plt.show()</code> affiche le graphique. On importe le module sous le nom court <code>plt</code>.",
      en: "<code>plt.plot(X, Y)</code> places the points (X[0] ; Y[0]), (X[1] ; Y[1]), … and joins them. <code>plt.show()</code> displays the graph. The module is imported under the short name <code>plt</code>." },
    { t: "code", code: "import matplotlib.pyplot as plt\n\nX = [0, 1, 2, 3, 4]\nY = [0, 1, 4, 9, 16]\nplt.plot(X, Y)\nplt.show()" },
    { t: "p",
      fr: "Passe la souris (ou le doigt) sur le graphique pour lire les coordonnées des points.",
      en: "Move the mouse (or your finger) over the graph to read the coordinates of the points." },

    { t: "h", fr: "La courbe d'une fonction", en: "The graph of a function" },
    { t: "p",
      fr: "On calcule beaucoup de points rapprochés : ici 61 points de −2 à 4, avec un pas de 0,1. Plus il y a de points, plus la courbe paraît lisse.",
      en: "Compute many close points: here 61 points from −2 to 4, with a step of 0.1. The more points, the smoother the curve looks." },
    { t: "code", code: "import matplotlib.pyplot as plt\n\ndef f(x):\n    return x ** 2 - 2 * x - 1\n\nX = []\nY = []\nfor k in range(61):\n    x = -2 + k * 0.1\n    X.append(x)\n    Y.append(f(x))\n\nplt.plot(X, Y)\nplt.grid()\nplt.title(\"f(x) = x² − 2x − 1\")\nplt.show()" },
    { t: "note",
      fr: "On écrit <code>x = -2 + k * 0.1</code> plutôt que d'ajouter 0.1 à chaque tour : les petites erreurs d'arrondi des décimaux ne s'accumulent pas.",
      en: "We write <code>x = -2 + k * 0.1</code> rather than adding 0.1 on each pass, so the tiny rounding errors of decimals don't pile up." },

    { t: "h", fr: "Les termes d'une suite", en: "The terms of a sequence" },
    { t: "p",
      fr: "Une suite n'est définie que pour des entiers : on trace des points sans les relier, avec le format <code>\"o\"</code>. Ici, la droite d'équation y = 10 (tracée avec <code>axhline</code>) montre la limite.",
      en: "A sequence is only defined for integers, so plot points without joining them, with the format <code>\"o\"</code>. Here the line y = 10 (drawn with <code>axhline</code>) shows the limit." },
    { t: "code", code: "import matplotlib.pyplot as plt\n\nN = []\nU = []\nu = 5\nfor n in range(30):\n    N.append(n)\n    U.append(u)\n    u = 0.8 * u + 2\n\nplt.plot(N, U, \"o\")\nplt.axhline(10, color=\"r\", linestyle=\"--\")\nplt.xlabel(\"n\")\nplt.ylabel(\"u(n)\")\nplt.show()" },

    { t: "h", fr: "Couleurs, styles et légende", en: "Colours, styles and legend" },
    { t: "table",
      head: { fr: ["Format", "Résultat"], en: ["Format", "Result"] },
      rows: [
        ["\"r\"", { fr: "ligne rouge (b bleu, g vert, k noir, m magenta…)", en: "red line (b blue, g green, k black, m magenta…)" }],
        ["\"--\"   \":\"", { fr: "ligne en tirets, en pointillés", en: "dashed line, dotted line" }],
        ["\"o\"   \"+\"   \"x\"", { fr: "des points seuls, sans ligne", en: "points only, no line" }],
        ["\"go-\"", { fr: "points verts reliés", en: "green points, joined" }],
        ["label=\"…\" + plt.legend()", { fr: "nom de la courbe, affiché dans la légende", en: "name of the curve, shown in the legend" }]
      ] },
    { t: "code", code: "import matplotlib.pyplot as plt\n\nX = []\nF = []\nG = []\nfor k in range(71):\n    x = -3 + k * 0.1\n    X.append(x)\n    F.append(x ** 2)\n    G.append(2 * x + 3)\n\nplt.plot(X, F, label=\"x²\")\nplt.plot(X, G, \"--\", label=\"2x + 3\")\nplt.legend()\nplt.grid()\nplt.show()" },
    { t: "p",
      fr: "Les deux courbes se coupent en x = −1 et x = 3 : ce sont les solutions de x² = 2x + 3.",
      en: "The two curves cross at x = −1 and x = 3: these are the solutions of x² = 2x + 3." },

    { t: "h", fr: "Diagramme en bâtons", en: "Bar charts" },
    { t: "p",
      fr: "<code>plt.bar(valeurs, effectifs)</code> dessine un bâton par valeur. Exemple : 1 000 lancers d'un dé.",
      en: "<code>plt.bar(values, counts)</code> draws one bar per value. Example: 1,000 rolls of a die." },
    { t: "code", code: "import matplotlib.pyplot as plt\nfrom random import randint\n\nfaces = [1, 2, 3, 4, 5, 6]\neffectifs = [0, 0, 0, 0, 0, 0]\nfor k in range(1000):\n    r = randint(1, 6)\n    effectifs[r - 1] = effectifs[r - 1] + 1\n\nplt.bar(faces, effectifs)\nplt.title(\"1 000 lancers d'un dé\")\nplt.show()" }
  ],
  exercises: [
    { t: "predict", id: "l12-p1",
      title: { fr: "Fabriquer les listes", en: "Building the lists" },
      items: [
        { code: "X = []\nfor k in range(-2, 3):\n    X.append(k)\nX" },
        { code: "Y = []\nfor x in [-2, -1, 0, 1, 2]:\n    Y.append(x ** 2)\nY" },
        { code: "X = []\nfor k in range(5):\n    X.append(k * 0.25)\nX",
          note: { fr: "k * 0.25 est toujours un float : Python écrit 0.0 et 1.0, avec le « .0 ».", en: "k * 0.25 is always a float: Python writes 0.0 and 1.0, with the \".0\"." } },
        { code: "len(list(range(0, 101, 5)))",
          note: { fr: "0, 5, 10, …, 100 : 21 valeurs (on n'oublie pas 0).", en: "0, 5, 10, …, 100: 21 values (don't forget 0)." } },
        { code: "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [1, 4])",
          note: { fr: "X et Y doivent avoir la même longueur : un point = une abscisse et une ordonnée.", en: "X and Y must have the same length: one point = one x and one y." } }
      ] },
    {
      "t": "fill",
      "id": "l12-f1",
      "title": {
        "fr": "Tracer une cubique",
        "en": "Plotting a cubic"
      },
      "prompt": {
        "fr": "Complète le programme pour tracer la courbe de f(x) = x³ − 3x sur [−2 ; 2] avec 41 points (un pas de 0,1). Clique sur « Exécuter » pour voir la courbe.",
        "en": "Fill in the program to plot the graph of f(x) = x³ − 3x on [−2 ; 2] with 41 points (a step of 0.1). Click \"Run\" to see the curve."
      },
      "template": "import matplotlib.pyplot as plt\n\ndef f(x):\n    return x ** 3 - 3 * x\n\nX = [-2 + k * 0.1 for k in range({{41}})]\nY = [{{f(x)}} for x in X]\nplt.plot({{X, Y}})\nplt.axhline(0, color=\"k\")\nplt.grid()\nplt.show()",
      "tests": [
        {
          "call": "len(_points(0))",
          "expect": "41",
          "desc": {
            "fr": "la courbe a 41 points",
            "en": "the curve has 41 points"
          }
        },
        {
          "call": "_points(0)[0]",
          "expect": "(-2, -2)",
          "desc": {
            "fr": "elle commence au point (−2 ; −2)",
            "en": "it starts at the point (−2 ; −2)"
          }
        },
        {
          "call": "_points(0)[-1]",
          "expect": "(2, 2)",
          "desc": {
            "fr": "elle finit au point (2 ; 2)",
            "en": "it ends at the point (2 ; 2)"
          }
        },
        {
          "call": "_kind(0)",
          "expect": "'line'",
          "desc": {
            "fr": "c'est une courbe tracée avec plt.plot",
            "en": "it's a curve drawn with plt.plot"
          }
        }
      ],
      "hints": [
        {
          "fr": "De −2 à 2 avec un pas de 0,1, il y a 40 intervalles, donc 41 valeurs de k : <code>range(41)</code>.",
          "en": "From −2 to 2 in steps of 0.1 there are 40 intervals, so 41 values of k: <code>range(41)</code>."
        },
        {
          "fr": "Y contient les images f(x) des valeurs de X, et <code>plt.plot</code> reçoit les abscisses puis les ordonnées.",
          "en": "Y holds the images f(x) of the values in X, and <code>plt.plot</code> takes the x values then the y values."
        }
      ]
    },
    { t: "code", id: "l12-c1",
      title: { fr: "Tracer une parabole", en: "Plotting a parabola" },
      prompt: { fr: "Fabrique la liste X des entiers de −3 à 3 et la liste Y de leurs carrés, puis trace la courbe avec <code>plt.plot(X, Y)</code>. Clique sur « Exécuter » pour voir ton graphique.",
                en: "Build the list X of the integers from −3 to 3 and the list Y of their squares, then plot the curve with <code>plt.plot(X, Y)</code>. Click \"Run\" to see your graph." },
      starter: { fr: "import matplotlib.pyplot as plt\n\nX = []\nY = []\n\nplt.show()\n", en: "import matplotlib.pyplot as plt\n\nX = []\nY = []\n\nplt.show()\n" },
      tests: [
        { call: "_points(0)", expect: "[(-3, 9), (-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4), (3, 9)]", desc: { fr: "la courbe passe par (−3 ; 9), (−2 ; 4), …, (3 ; 9), dans l'ordre", en: "the curve goes through (−3 ; 9), (−2 ; 4), …, (3 ; 9), in order" } },
        { call: "_kind(0)", expect: "'line'", desc: { fr: "c'est une courbe tracée avec plt.plot", en: "it's a curve drawn with plt.plot" } }
      ],
      require: ["plot", "for", "append"],
      hint: { fr: "<code>for x in range(-3, 4):</code> puis <code>X.append(x)</code> et <code>Y.append(x ** 2)</code>. Après la boucle : <code>plt.plot(X, Y)</code>.",
              en: "<code>for x in range(-3, 4):</code> then <code>X.append(x)</code> and <code>Y.append(x ** 2)</code>. After the loop: <code>plt.plot(X, Y)</code>." },
      solution: "import matplotlib.pyplot as plt\n\nX = []\nY = []\nfor x in range(-3, 4):\n    X.append(x)\n    Y.append(x ** 2)\nplt.plot(X, Y)\nplt.show()" },
    { t: "code", id: "l12-c2",
      title: { fr: "Les 20 premiers termes d'une suite", en: "The first 20 terms of a sequence" },
      prompt: { fr: "Trace les points (n ; u<sub>n</sub>) pour n allant de 0 à 19, où u<sub>0</sub> = 5 et u<sub>n+1</sub> = 0,8u<sub>n</sub> + 2. Les points ne doivent pas être reliés.",
                en: "Plot the points (n ; u<sub>n</sub>) for n from 0 to 19, where u<sub>0</sub> = 5 and u<sub>n+1</sub> = 0.8u<sub>n</sub> + 2. The points must not be joined." },
      starter: { fr: "import matplotlib.pyplot as plt\n\nN = []\nU = []\nu = 5\n\nplt.show()\n", en: "import matplotlib.pyplot as plt\n\nN = []\nU = []\nu = 5\n\nplt.show()\n" },
      tests: [
        { call: "len(_points(0))", expect: "20", desc: { fr: "20 points sont tracés", en: "20 points are plotted" } },
        { call: "_points(0)[:3]", expect: "[(0, 5), (1, 6.0), (2, 6.8)]", desc: { fr: "les premiers points sont (0 ; 5), (1 ; 6) et (2 ; 6,8)", en: "the first points are (0 ; 5), (1 ; 6) and (2 ; 6.8)" } },
        { call: "_dots(0) or _kind(0) == 'scatter'", expect: "True", desc: { fr: "les points ne sont pas reliés", en: "the points aren't joined" } }
      ],
      require: ["for", "append"],
      hint: { fr: "Dans la boucle <code>for n in range(20):</code>, ajoute n à N et u à U <strong>avant</strong> de calculer le terme suivant. Puis <code>plt.plot(N, U, \"o\")</code>.",
              en: "In the loop <code>for n in range(20):</code>, add n to N and u to U <strong>before</strong> computing the next term. Then <code>plt.plot(N, U, \"o\")</code>." },
      solution: "import matplotlib.pyplot as plt\n\nN = []\nU = []\nu = 5\nfor n in range(20):\n    N.append(n)\n    U.append(u)\n    u = 0.8 * u + 2\nplt.plot(N, U, \"o\")\nplt.show()" },
    { t: "code", id: "l12-c3",
      title: { fr: "Simuler 600 lancers de dé", en: "Simulating 600 die rolls" },
      prompt: { fr: "Simule 600 lancers d'un dé. Compte les résultats dans la liste <code>effectifs</code> (la case 0 pour la face 1, …, la case 5 pour la face 6), puis trace le diagramme en bâtons avec <code>plt.bar(faces, effectifs)</code>.",
                en: "Simulate 600 rolls of a die. Count the results in the list <code>effectifs</code> (slot 0 for face 1, …, slot 5 for face 6), then draw the bar chart with <code>plt.bar(faces, effectifs)</code>." },
      starter: { fr: "import matplotlib.pyplot as plt\nfrom random import randint\n\nfaces = [1, 2, 3, 4, 5, 6]\neffectifs = [0, 0, 0, 0, 0, 0]\n\nplt.show()\n",
                 en: "import matplotlib.pyplot as plt\nfrom random import randint\n\nfaces = [1, 2, 3, 4, 5, 6]\neffectifs = [0, 0, 0, 0, 0, 0]\n\nplt.show()\n" },
      tests: [
        { call: "_kind(0)", expect: "'bar'", desc: { fr: "un diagramme en bâtons est tracé", en: "a bar chart is drawn" } },
        { call: "_xs(0)", expect: "[1, 2, 3, 4, 5, 6]", desc: { fr: "un bâton pour chaque face, de 1 à 6", en: "one bar for each face, 1 to 6" } },
        { call: "sum(_ys(0))", expect: "600", desc: { fr: "la somme des effectifs vaut 600", en: "the counts add up to 600" } }
      ],
      require: ["for", "randint", "bar"],
      hint: { fr: "Dans une boucle de 600 tours : <code>r = randint(1, 6)</code>, puis <code>effectifs[r - 1] = effectifs[r - 1] + 1</code>. Après la boucle : <code>plt.bar(faces, effectifs)</code>.",
              en: "In a loop of 600 passes: <code>r = randint(1, 6)</code>, then <code>effectifs[r - 1] = effectifs[r - 1] + 1</code>. After the loop: <code>plt.bar(faces, effectifs)</code>." },
      solution: "import matplotlib.pyplot as plt\nfrom random import randint\n\nfaces = [1, 2, 3, 4, 5, 6]\neffectifs = [0, 0, 0, 0, 0, 0]\nfor k in range(600):\n    r = randint(1, 6)\n    effectifs[r - 1] = effectifs[r - 1] + 1\nplt.bar(faces, effectifs)\nplt.show()" },
    { t: "code", id: "l12-c4",
      title: { fr: "Dessiner la méthode de Monte-Carlo", en: "Drawing the Monte Carlo method" },
      prompt: { fr: "Tire 1 000 points au hasard dans le carré [0 ; 1] × [0 ; 1]. Range les points du quart de disque (x² + y² ≤ 1) dans les listes X1, Y1 et les autres dans X2, Y2. Trace d'abord les points du quart de disque, puis les autres, avec <code>plt.plot(X1, Y1, \"o\")</code> et <code>plt.plot(X2, Y2, \"o\")</code>.",
                en: "Draw 1,000 random points in the square [0 ; 1] × [0 ; 1]. Put the points inside the quarter disc (x² + y² ≤ 1) in the lists X1, Y1 and the others in X2, Y2. Plot the quarter-disc points first, then the others, with <code>plt.plot(X1, Y1, \"o\")</code> and <code>plt.plot(X2, Y2, \"o\")</code>." },
      starter: { fr: "import matplotlib.pyplot as plt\nfrom random import random\n\nX1 = []\nY1 = []\nX2 = []\nY2 = []\n\nplt.axis(\"equal\")\nplt.show()\n",
                 en: "import matplotlib.pyplot as plt\nfrom random import random\n\nX1 = []\nY1 = []\nX2 = []\nY2 = []\n\nplt.axis(\"equal\")\nplt.show()\n" },
      tests: [
        { call: "_nseries()", expect: "2", desc: { fr: "deux séries de points sont tracées", en: "two sets of points are plotted" } },
        { call: "len(_points(0)) + len(_points(1))", expect: "1000", desc: { fr: "1 000 points au total", en: "1,000 points in total" } },
        { call: "all(x ** 2 + y ** 2 <= 1 for x, y in _points(0))", expect: "True", desc: { fr: "la première série est dans le quart de disque", en: "the first set is inside the quarter disc" } },
        { call: "all(x ** 2 + y ** 2 > 1 for x, y in _points(1))", expect: "True", desc: { fr: "la deuxième série est en dehors", en: "the second set is outside" } }
      ],
      require: ["for", "random", "if"],
      hint: { fr: "Dans une boucle de 1 000 tours : <code>x = random()</code>, <code>y = random()</code>, puis <code>if x ** 2 + y ** 2 <= 1:</code> ajoute x à X1 et y à Y1, <code>else:</code> ajoute-les à X2 et Y2.",
              en: "In a loop of 1,000 passes: <code>x = random()</code>, <code>y = random()</code>, then <code>if x ** 2 + y ** 2 <= 1:</code> add x to X1 and y to Y1, <code>else:</code> add them to X2 and Y2." },
      solution: "import matplotlib.pyplot as plt\nfrom random import random\n\nX1 = []\nY1 = []\nX2 = []\nY2 = []\nfor k in range(1000):\n    x = random()\n    y = random()\n    if x ** 2 + y ** 2 <= 1:\n        X1.append(x)\n        Y1.append(y)\n    else:\n        X2.append(x)\n        Y2.append(y)\nplt.plot(X1, Y1, \"o\")\nplt.plot(X2, Y2, \"o\")\nplt.axis(\"equal\")\nplt.show()",
      after: { fr: "La proportion de points bleus est proche de π/4 ≈ 0,785 : c'est l'estimation de π de la leçon 14, en image.",
               en: "The share of blue points is close to π/4 ≈ 0.785: it's the π estimate from lesson 14, as a picture." } }
  ],
  challenges: [
    { t: "code", id: "l12-d1",
      title: { fr: "Une courbe et sa tangente", en: "A curve and its tangent" },
      prompt: { fr: "Soit f(x) = x² − 3, dont la dérivée est f′(x) = 2x. 1) Écris <code>tangente(a)</code> qui renvoie la liste <code>[m, p]</code> telle que la tangente à la courbe au point d'abscisse a ait pour équation y = mx + p. 2) Trace sur le même graphique la courbe de f sur [−3 ; 3] avec 61 points (pas de 0,1), <strong>puis</strong> la tangente au point d'abscisse 1, sur le même intervalle.",
                en: "Let f(x) = x² − 3, whose derivative is f′(x) = 2x. 1) Write <code>tangente(a)</code> that returns the list <code>[m, p]</code> such that the tangent to the curve at the point with x-coordinate a has equation y = mx + p. 2) On the same graph, plot the curve of f on [−3 ; 3] with 61 points (step 0.1), <strong>then</strong> the tangent at the point with x-coordinate 1, on the same interval." },
      starter: { fr: "import matplotlib.pyplot as plt\n\ndef f(x):\n    return x ** 2 - 3\n\ndef tangente(a):\n    \n\nplt.grid()\nplt.show()\n", en: "import matplotlib.pyplot as plt\n\ndef f(x):\n    return x ** 2 - 3\n\ndef tangente(a):\n    \n\nplt.grid()\nplt.show()\n" },
      tests: [
        { call: "tangente(1)", expect: "[2, -4]" },
        { call: "tangente(0)", expect: "[0, -3]" },
        { call: "tangente(-2)", expect: "[-4, -7]" },
        { call: "_nseries()", expect: "2", desc: { fr: "deux courbes sont tracées", en: "two curves are plotted" } },
        { call: "len(_points(0)) == 61 and abs(_points(0)[0][0] + 3) < 1e-9 and abs(_points(0)[0][1] - 6) < 1e-9", expect: "True", desc: { fr: "la première est la courbe de f : 61 points, en partant de (−3 ; 6)", en: "the first one is the curve of f: 61 points, starting at (−3 ; 6)" } },
        { call: "all(abs(y - (2 * x - 4)) < 1e-9 for x, y in _points(1)) and min(_xs(1)) < -2.9 and max(_xs(1)) > 2.9", expect: "True", desc: { fr: "la deuxième est la droite y = 2x − 4, tracée sur [−3 ; 3]", en: "the second is the line y = 2x − 4, drawn on [−3 ; 3]" } }
      ],
      require: ["def", "plot", "return"],
      hints: [
        { fr: "La tangente en a a pour équation y = f′(a)(x − a) + f(a). Développe pour trouver m et p.", en: "The tangent at a has equation y = f′(a)(x − a) + f(a). Expand it to find m and p." },
        { fr: "m = f′(a) = 2a et p = f(a) − 2a × a. Pour le tracé, fabrique X avec <code>x = -3 + k * 0.1</code> pour k de 0 à 60, puis Y = les images par f et T = les ordonnées m × x + p de la tangente.", en: "m = f′(a) = 2a and p = f(a) − 2a × a. For the plot, build X with <code>x = -3 + k * 0.1</code> for k from 0 to 60, then Y = the images by f and T = the y-values m × x + p of the tangent." },
        { fr: "<code>m, p = tangente(1)</code> fonctionne aussi avec une liste. Puis <code>X = [-3 + k * 0.1 for k in range(61)]</code>, <code>plt.plot(X, [f(x) for x in X])</code> et <code>plt.plot(X, [m * x + p for x in X])</code>.", en: "<code>m, p = tangente(1)</code> also works with a list. Then <code>X = [-3 + k * 0.1 for k in range(61)]</code>, <code>plt.plot(X, [f(x) for x in X])</code> and <code>plt.plot(X, [m * x + p for x in X])</code>." }
      ],
      solution: "import matplotlib.pyplot as plt\n\ndef f(x):\n    return x ** 2 - 3\n\ndef tangente(a):\n    m = 2 * a\n    p = f(a) - m * a\n    return [m, p]\n\nX = [-3 + k * 0.1 for k in range(61)]\nm, p = tangente(1)\nplt.plot(X, [f(x) for x in X])\nplt.plot(X, [m * x + p for x in X])\nplt.grid()\nplt.show()" },
    { t: "code", id: "l12-d2",
      title: { fr: "La suite en escalier", en: "The staircase diagram" },
      prompt: { fr: "Soit la suite u<sub>n+1</sub> = f(u<sub>n</sub>) avec f(x) = 0,5x + 2. 1) Écris <code>escalier(u0, n)</code> qui renvoie deux listes X et Y : les points (u<sub>0</sub> ; 0), (u<sub>0</sub> ; u<sub>1</sub>), (u<sub>1</sub> ; u<sub>1</sub>), (u<sub>1</sub> ; u<sub>2</sub>), (u<sub>2</sub> ; u<sub>2</sub>), … jusqu'à (u<sub>n</sub> ; u<sub>n</sub>). 2) Trace, dans cet ordre : la droite de f sur [0 ; 5], la droite y = x sur [0 ; 5], puis l'escalier pour u<sub>0</sub> = 0 et n = 10.",
                en: "Consider the sequence u<sub>n+1</sub> = f(u<sub>n</sub>) with f(x) = 0.5x + 2. 1) Write <code>escalier(u0, n)</code> that returns two lists X and Y: the points (u<sub>0</sub> ; 0), (u<sub>0</sub> ; u<sub>1</sub>), (u<sub>1</sub> ; u<sub>1</sub>), (u<sub>1</sub> ; u<sub>2</sub>), (u<sub>2</sub> ; u<sub>2</sub>), … up to (u<sub>n</sub> ; u<sub>n</sub>). 2) Plot, in this order: the line of f on [0 ; 5], the line y = x on [0 ; 5], then the staircase for u<sub>0</sub> = 0 and n = 10." },
      starter: { fr: "import matplotlib.pyplot as plt\n\ndef f(x):\n    return 0.5 * x + 2\n\ndef escalier(u0, n):\n    X = [u0]\n    Y = [0]\n    u = u0\n    \n\nplt.show()\n", en: "import matplotlib.pyplot as plt\n\ndef f(x):\n    return 0.5 * x + 2\n\ndef escalier(u0, n):\n    X = [u0]\n    Y = [0]\n    u = u0\n    \n\nplt.show()\n" },
      tests: [
        { call: "escalier(0, 2)", expect: "([0, 0, 2.0, 2.0, 3.0], [0, 2.0, 2.0, 3.0, 3.0])" },
        { call: "len(escalier(1, 10)[0])", expect: "21", desc: { fr: "pour n = 10, l'escalier a 21 points", en: "for n = 10, the staircase has 21 points" } },
        { call: "_nseries()", expect: "3", desc: { fr: "trois tracés : la droite de f, la droite y = x et l'escalier", en: "three plots: the line of f, the line y = x and the staircase" } },
        { call: "all(abs(y - (0.5 * x + 2)) < 1e-9 for x, y in _points(0)) and all(abs(y - x) < 1e-9 for x, y in _points(1))", expect: "True", desc: { fr: "les deux premiers tracés sont bien y = f(x) et y = x", en: "the first two plots are y = f(x) and y = x" } },
        { call: "len(_points(2)) == 21 and _points(2)[:3] == [(0, 0), (0, 2), (2, 2)]", expect: "True", desc: { fr: "le troisième est l'escalier pour u₀ = 0 et n = 10 : (0 ; 0), (0 ; 2), (2 ; 2), …", en: "the third is the staircase for u₀ = 0 and n = 10: (0 ; 0), (0 ; 2), (2 ; 2), …" } }
      ],
      require: ["for", "append", "plot", "return"],
      hints: [
        { fr: "À chaque étape, on monte verticalement jusqu'à la courbe de f, puis on va horizontalement jusqu'à la droite y = x. Cela fait deux points par étape.", en: "At each step, go up vertically to the curve of f, then horizontally to the line y = x. That's two points per step." },
        { fr: "Dans une boucle de n tours : calcule <code>v = f(u)</code>, ajoute le point (u ; v) puis le point (v ; v), et remplace u par v. Termine par <code>return X, Y</code>.", en: "In a loop of n passes: compute <code>v = f(u)</code>, add the point (u ; v) then the point (v ; v), and replace u with v. Finish with <code>return X, Y</code>." },
        { fr: "Pour le tracé : <code>plt.plot([0, 5], [f(0), f(5)])</code>, <code>plt.plot([0, 5], [0, 5])</code>, puis <code>X, Y = escalier(0, 10)</code> et <code>plt.plot(X, Y)</code>.", en: "For the plot: <code>plt.plot([0, 5], [f(0), f(5)])</code>, <code>plt.plot([0, 5], [0, 5])</code>, then <code>X, Y = escalier(0, 10)</code> and <code>plt.plot(X, Y)</code>." }
      ],
      solution: "import matplotlib.pyplot as plt\n\ndef f(x):\n    return 0.5 * x + 2\n\ndef escalier(u0, n):\n    X = [u0]\n    Y = [0]\n    u = u0\n    for k in range(n):\n        v = f(u)\n        X.append(u)\n        Y.append(v)\n        X.append(v)\n        Y.append(v)\n        u = v\n    return X, Y\n\nplt.plot([0, 5], [f(0), f(5)])\nplt.plot([0, 5], [0, 5])\nX, Y = escalier(0, 10)\nplt.plot(X, Y)\nplt.show()",
      after: { fr: "L'escalier se resserre vers le point d'intersection des deux droites, en x = 4 : c'est la limite de la suite.", en: "The staircase closes in on the point where the two lines meet, at x = 4: that's the limit of the sequence." } }
  ]
});
