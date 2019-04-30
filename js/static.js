var res = {};

res.PI_CIRCLE = Math.PI * 2;

res.buttons = [];

function addButton(title, description, date, category, speed) {
    res.buttons.push({'title': title, 'description': description, 'date': moment.utc(date), 'category': category, 'speed': speed})
}

addButton('Hyjal', 'Hyjal was not officially open during vanilla, but some players got through!', '2006-03-13 16:00:00');
addButton('Silithus', 'Ahn\'Qiraj opening', '2006-04-15 08:00:00');
addButton('Stormwind', 'Horde in the Elwynn Forest and Stormwind!', '2006-07-28 15:30:00');
addButton('Molten core', 'Several guilds in MC!', '2006-09-23 19:20:00');
addButton('Naxxramas', 'Naxxramas first 40-players raid', '2006-10-03 20:00:00');
addButton('GM Island', 'GM was found!', '2006-11-13 21:20:00');
addButton('Blasted Lands', 'Kazzak?', '2006-12-08 15:30:00');
addButton('Lvling Path', 'Average leveling path. Tauren Warrior 1-60 lvl', '2006-06-25 20:50:00', 'avg_leveling_path', 10);
addButton('Lvling Bot?', 'Average leveling path. Troll Hunter 1-60 lvl (Bot?)', '2006-03-10 09:10:00', 'avg_leveling_path_bot', 10);

res.zones_latlng = {
  "Darnassus": [
    80.44493052181339,
    -166.55273437500003
  ],
  "Naxxramas": [
    75.86664560539866,
    19.072265625000004
  ],
  "Hyjal": [
    71.15939141681443,
    -126.82617187500001
  ],
  "Tanaris": [
    4.653079918274051,
    -117.50976562500001
  ],
  "Un'Goro Crater": [
    10.401377554543553,
    -135.08789062500003
  ],
  "Silithus": [
    8.841651120809145,
    -155.91796875000003
  ],
  "Zul'Farrak": [
    14.00869637063467,
    -124.71679687500001
  ],
  "Thousand Needles": [
    24.766784522874453,
    -138.51562500000003
  ],
  "Feralas": [
    29.99300228455108,
    -148.09570312500003
  ],
  "Dire Maul": [
    30.221101852485987,
    -157.41210937500003
  ],
  "Razorfen Kraul": [
    31.27855085894653,
    -134.56054687500003
  ],
  "Thunder Bluff": [
    48.63290858589535,
    -145.54687500000003
  ],
  "Onyxia's Lair": [
    27.059125784374068,
    -116.63085937500001
  ],
  "The Barrens": [
    52.26815737376817,
    -125.50781250000001
  ],
  "Desolace": [
    47.87214396888731,
    -167.958984375
  ],
  "Stonetalon Mountains": [
    58.58543569119917,
    -153.89648437500003
  ],
  "Felwood": [
    71.99257805093251,
    -140.18554687500003
  ],
  "Orgrimmar": [
    60.71619779357716,
    -112.76367187500001
  ],
  "Dustwallow Marsh": [
    36.38591277287654,
    -121.90429687500001
  ],
  "Maraudon": [
    46.98025235521883,
    -161.01562500000003
  ],
  "Darkshore": [
    74.21198251594369,
    -149.06250000000003
  ],
  "Ashenvale": [
    64.8115572502203,
    -123.83789062500001
  ],
  "Moonglade": [
    77.4850880888233,
    -127.88085937500001
  ],
  "Winterspring": [
    75.0956327285438,
    -110.12695312500001
  ],
  "Azshara": [
    68.1061015189654,
    -106.43554687500001
  ],
  "Westfall": [
    12.897489183755892,
    -15.644531250000002
  ],
  "Duskwood": [
    12.683214911818666,
    -0.43945312500000006
  ],
  "Redridge Mountains": [
    25.045792240303445,
    11.601562500000002
  ],
  "Burning Steppes": [
    36.73888412439431,
    14.501953125000002
  ],
  "Deadmines": [
    9.795677582829743,
    -19.687500000000004
  ],
  "Blackrock Spire": [
    36.24427318493909,
    4.526367187500001
  ],
  "Blackrock Mountain": [
    35.782170703266075,
    1.8896484375000002
  ],
  "Swamp of Sorrows": [
    15.580710739162123,
    17.490234375000004
  ],
  "Searing Gorge": [
    43.644025847699496,
    -1.5380859375000002
  ],
  "Blackrock Depths": [
    35.9602229692967,
    -0.9667968750000001
  ],
  "Zul'Gurub": [
    4.5654735507102915,
    5.9326171875
  ],
  "Stranglethorn Vale": [
    -6.092165893502,
    -9.975585937500002
  ],
  "Blasted Lands": [
    8.971897294083014,
    15.556640625000002
  ],
  "Molten Core": [
    35.67514743608467,
    -3.9990234375000004
  ],
  "Deadwind Pass": [
    15.496032414238634,
    6.50390625
  ],
  "The Temple of Atal'Hakkar": [
    15.707662769583518,
    23.73046875
  ],
  "Blackwing Lair": [
    32.32427558887655,
    0.8349609375000001
  ],
  "Karazhan": [
    9.752370139173285,
    6.987304687500001
  ],
  "Elwynn Forest": [
    23.160563309048314,
    -8.393554687500002
  ],
  "Stormwind City": [
    28.188243641850313,
    -13.139648437500002
  ],
  "Deeprun Tram": [
    38.89103282648846,
    -12.7880859375
  ],
  "Ironforge": [
    50.401515322782366,
    -1.6259765625
  ],
  "Dun Morogh": [
    47.54687159892238,
    -4.614257812500001
  ],
  "Wetlands": [
    58.1011054973059,
    11.293945312500002
  ],
  "Gnomeregan": [
    49.41097319969587,
    -12.436523437500002
  ],
  "Badlands": [
    40.88029480552824,
    11.206054687500002
  ],
  "Eastern Plaguelands": [
    74.72961516378619,
    31.289062500000004
  ],
  "Scholomance": [
    72.18180355624855,
    12.1728515625
  ],
  "Arathi Highlands": [
    65.85675647909318,
    19.599609375000004
  ],
  "Western Plaguelands": [
    73.42842364106818,
    5.185546875000001
  ],
  "Undercity": [
    73.02259157147301,
    -9.755859375000002
  ],
  "Stratholme": [
    76.99004583046481,
    18.588867187500004
  ],
  "Hillsbrad Foothills": [
    68.8159271333607,
    -0.8789062500000001
  ],
  "Scarlet Monastery": [
    75.60680105154307,
    -1.8017578125000002
  ],
  "Alterac Mountains": [
    70.7724429742589,
    -3.3398437500000004
  ],
  "Loch Modan": [
    49.35375571830993,
    14.326171875000002
  ],
  "Uldaman": [
    44.37098696297173,
    17.006835937500004
  ],
  "Durotar": [
    54.316523240258284,
    -109.6435546875
  ],
  "Mulgore": [
    42.45588764197166,
    -140.53710937500003
  ],
  "Tirisfal Glades": [
    74.27165531800037,
    -13.754882812500002
  ],
  "Silverpine Forest": [
    70.90226826757711,
    -17.797851562500004
  ],
  "Ragefire Chasm": [
    59.93300042374631,
    -107.66601562500001
  ],
  "Blackfathom Deeps": [
    68.73638345287266,
    -154.3798828125
  ],
  "The Hinterlands": [
    67.90861918215302,
    15.380859375000002
  ],
  "Wailing Caverns": [
    50.51342652633956,
    -129.68261718750003
  ],
  "Shadowfang Keep": [
    68.55235079759059,
    -20.500488281250004
  ],
  "Razorfen Downs": [
    29.611670115197406,
    -127.83691406250001
  ],
  "The Great Sea": [
    51.83577752045248,
    -65.74218750000001
  ],
  "GM Island": [
    7.710991655433217,
    -67.14843750000001
  ],
  "Teldrassil": [
    78.67755670538617,
    -154.09423828125003
  ],
  "Ruins of Ahn'Qiraj": [
    -6.0968598188879355,
    -150.90820312500003
  ],
  "Gates of Ahn'Qiraj": [
    2.2406396093827334,
    -158.203125
  ],
  "Ahn'Qiraj": [
    -5.659718554577286,
    -162.9931640625
  ],
  "Arathi Basin": [
    66.04479639610696,
    22.82958984375
  ],
  "Warsong Gulch": [
    63.84066844285508,
    -124.58496093750001
  ],
  "Alterac Valley": [
    70.23717539303026,
    0.10986328125000001
  ]
};

res.map_prefix = '<a href="https://github.com/edmarisov/cavernsoftime" title="Project\'s GitHub">Project\'s GitHub</a> | <a href="http://eu.blizzard.com/en-gb/company/about/copyrightnotices.html" title="World of Warcraft® ©2004 Blizzard Entertainment, Inc. All rights reserved. World of Warcraft, Warcraft and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.">Copyright Acknowledgement Notice</a> | <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>';

res.particle_img = new Image();
res.particle_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH1wQUCC4hoGmo9QAACvlJREFUaN69mltz00gQhS3NSCMlNjEmBYTi//8zCipUsIMd6zKytA/fctKMDITArh5ctqxLX06fvsxkiz84sizLsizPc74sFotpmvSZHPO/fnLxb8jwbNH1yZc8z8dx1HedT+Q7nU6LxWIcxz+U+zkKIC7CSYEsy7z3CDoMQ5ZlRVFwXiJO0zRNE7eM4zgMA2dQ5g+dkD0dKlKA9xVFYZVJjouLixhj13V5nnvvh2GY+wQd+MQnz9DE/VL0PM/zPHfOIX2e50VROOecc4KKvb4sS+yti8uyxPZnH44m2OUZCmS/tDqPFmZkeL1MQBrH0XtPMKAGpkXz0+mUZRkQUgzIe1w8DIN89UcKIJNzTqIvFgvvPX7QgWeKorBBoovHcYwxEiGCO0eMcRxHzlur931v1X4+hJDMGl74wd15npdl6b333kt67/00TUALbhXSsL2FYlEU6GZlBYFzhX/PA5bap2mSlJiKoIRqnHOWSefPEdNbqPDX6XSKMSqK2raVJlmWxRjx0i+j4owC2Iy3OudkJ8wplsTMNishMZ/EQIzxLEdxPfIh9ziOfd8TJ1xAtPR9/3sQEjMgeoIQ+IS/rI1FsvoSQkCZoiiUB6wfEj/zk8gRjKXJb3gAmPIsvQ/E6xpodB7x0oFIEOSIVM7IzHNcgZk8z2V4PN80zU90cHMFMLa40jlnDQ+QEo+BK8WuTDtnYfTUeRsVymXOObETj/pJTLs5eybIqetaNrbJSxgTz6iekwm4KymfcC/PgUx1XhcTcsitQutsQPsfxYDgpACw4chfmNM+V8WFrlceSCg//3ZYpuJpMcayLJXRkJ53zV2RJqayLCV0CIHXz6Uvy9JSEJaG2rEu71NgiLJsoSqWm+d1xYmA9KPy1idCCPryss4Iu1YfQUtqKxPrU9UEcaxqIqlw9QruGoahqqrj8SirJT5MPUDVJb+HEJS2FJGYWXGpUkKxS8QrPEIINmSVW9Q8JCWjJVwZmzhB86QMe1SAHC5PIRPS2/hDQ8mErDr4qfDI87yqKhUROkRuSQ/knKNVSDokgkG1WRLNLmFPHq0vFvpoKCvK8IjOT8tIhNA4jqfTyZZGArfVR5/iJesf6anM/Z0CiC6BhAFRSpKVrfRiUoku26OwrTgQRbaUDkIOr7CZDu9Rn8r51gl+Xn5KepuA8IllcVQVxpCbJM2VIYSiKIhCTsYYZWZyH84pikJZDKfJD+ouuq6TAN9BiFOErGgbR8sDokUuQAEMz/U8AcygQ1EUIQRbWsuHCKca21JnUucpEriYnluN6KMCtimR35VWLQywq3DPi8uyBHVlWVZVdXFxgSZ84UZ5RnDni3NO9lbehZGtmcdvh0j5OwiJsM5WyDYY8LtKbs5776uqEk29evWqLMvT6XR5eVkUxeFw2O12VMvg2znXtq0tGdCnKAphjDmArfnAcIwR9WKM/3pAQoj15QEZWHAkdv23Q967vLy8uLgoy3Kz2SyXy7quh2EIIVRVdTgc8jxfr9dVVbVty4tVCGF7Acb6wfbNakgEHingbZmu65I2yprfVhaQj/c+xrharW5ubrquy7JstVqFENbrtXOO4KOQXi6XwzB0XSfixvzee25E+qR5SHp/Tcf+ZReroi13bXE2r91VYClkKb+ur6+dc5vNBlagrQkhfPjwIcZYVdV6vd7v93QFIYSu6wAVwYCNLc/YQQY6E5aPtZCClackxYbQb2shEZS4CApqmubq6ur9+/dXV1ebzQaVNpvNp0+fQghv377tuq7ruhhj27bOORCvx1oRbfjKUaqg7GU+qW9t6WcLdFsO2WYf2rm+vq7rOoRQ1/Visbi5uXn37h2RsN1uMeput/v48WPf90lGR435oJeEYMeSSJhkYn8WbbpHYWS7MGUJuJnhwjRNq9Xq9evXb968Wa/XL1++xDlwy+Fw2O/3x+NRhY1NzDKnJVBbF3HX2dHdY5Kn57DMxeRD/47msNNZWtjj8fj169emaZxzNHFgtyxL6Gi1Wq3Xa6omSNOWusloUVRh7Xh+hGWjk0OZQonWjmPtpEAFRQhhuVyu1+sXL16IzsWV2IJ8V9c1OtgGRaKLQ+2AI/F8OgK0aUu4tJaw/Y0tnsmyIQQywHK5jDFut1tO1nVd1/XpdNrtdnd3dw8PD1++fNlut23bQqxaLpgPXZK/ZLL5LPlMTwxCxJ5iBpXKKsoV1k3T3N7eAp6+76uq+vz5M5VFjJHYZcLVdd0wDIfDwU61kh5F1Z7QO4eQvdhLVwmq3Mw0BfNohA9tM4gdx/H+/h6VLi8vYTpofhgGVGrbFg+M41jXddu2h8NhGAZCjrfbUicZYdi0o6Hvd9Uor6/rGolV9CsYLOWrU9PYEMAg+tXV1TRN+/3ee9/3/d3d3f39fdd1+/1+t9vt9/tpmo7HY9/3TdMQ+sgkZVQLqRGzIYfaWFP/OiUjiif1E+ggiSU3L8NdVKZnkYACbdviE+S7vb09HA4xRtYBGMUJLZzRSpSdoEBo8LUI81EB8aYaK+KdVCVq0joKdZH3XpYAVE3TnE4nPImZeU3btg8PD/v9/uHhoe/7vu9ZfZKftfInFAmxMpDeJSM+BjExoKrV8kDbtmJrbhOx4ge7bkda3W63fd8z4lwsFoRE0zQxRhKLTM6N3GtNru/yhu0NVcM+lhJaehnHkWU51UVIbFMbGb5pGgJGRE711jRNURS4247cEJ1QAUKiBMwHvm3SFIw5T7mq9PLYkYEKNXusc4mUxM12aqnq1RZOmj0JD8Qo0iAxtbTY3brCsr7tGLV6qwYATz52ZCoKkvWvZJBvl+JoyWkDtAKgZS+WNmwxoyqSF2N7WJi320Gdxbc1h1ydzOecxdZ8iijkAPF5eaeBuCKShb1pmsC90II+ElEYw1GS2C7JKBhY/MOHybKaS4Z7Wp5IloEBlbykqU5ShijvyNH2EJmIxe13lYl2wUpxP78mnY3aVVQ7N7fBZLt+HqSpt6UO7K0tBQAMw1s40Y5ZrrScI/yIPW20pAokwADlyGGjmSdqIJ4sVkuNLMsge5toVThoTduuzUjDJBKQQaxgG+LUA8liMNdpWde+TIW0TSvJqpEFhq0oiYpkxAm4bXeulAz6bUgkhV26xKSaW3lRDCv8KJhsF6JKi4QvhsG0IEosJJRj16TsUVHTtq3sTdCf2XCR/C6KQrshtEY2jiNlT9LvayBpuxPbIp4tg20LZXsDhTVSIr3Cw5LVz1YpbQrTdIl4UAqz5SrWFaLsrDyZLFmEWCa1a/fyUtd1mnlZMnjSQrcoT/NX2VXtTmJjMECVYafCtqwSThTcyaIY+lAXC0WqWH+00no++wrrdpJhk4Dd6mNlVadi14UksY1CywpIzLs0SVBo/XzzSvaj3SrIJ+gDJHKFXKk1qGT9Yr7fw2puvye9mLZ8UGsklcVvbzlDPrvJgCi33ki2HSSCzsPANuzCJ+gCZvKJ8saf7pmr69qKqMlFCEGTYPU9lr4SFrLVmBRQTrCuG4ZB8/e/sOlPyx/ahjOvPuZbl4TDZAsZqGCI2zTNHG/EwNM3nj112yUdpkZdli5ZTTrLcfNhjga6yW4i9TR/Z8/cL73BpC0ZoWm+WZalYpEmTpSf5AdVfr9km7+z8dWOr9XKnN18OUf/Wf+oyn9KvD5n3+icXpTUYIwkDc+rhiRR2KbEVqzP3rz7zL3TZ+s/NRJ2LR4IKSUlLc7/unf6iQfZw3pARLn4D46/4IEklOfZ92xN+rd2r/8DebSckAm1i/EAAAAASUVORK5CYII=";