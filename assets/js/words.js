var words = {
    pilot: [
        'airman', 'captain', 'flyer', 'aviator', 'aeronaut', 'fly', 'control', 'operate', 'fly', 'control', 'operate', 'navigate', 'drive', 'manage', 'direct', 'guide', 'handle', 'conduct', 'steer', 'direct', 'lead', 'manage', 'conduct', 'steer', 'trial', 'test', 'model', 'sample', 'experimental'
    ],
    definite: [
        'specific', 'exact', 'precise', 'clear', 'particular', 'express', 'determined', 'fixed', 'black-and-white', 'explicit', 'clear-cut', 'cut-and-dried clearly', 'defined', 'clear', 'explicit', 'black-and-white', 'clear-cut', 'unequivocal', 'unambiguous', 'guaranteed', 'clear', 'explicit', 'black-and-white', 'clear-cut', 'unequivocal', 'unambiguous', 'guaranteed', 'noticeable', 'marked', 'clear', 'decided', 'striking', 'noted', 'particular', 'obvious', 'dramatic', 'considerable', 'remarkable', 'apparent', 'evident', 'distinct', 'notable', 'manifest', 'conspicuous', 'certain', 'decided', 'sure', 'settled', 'convinced', 'positive', 'confident', 'assured'
    ],
    rational: [
        'sensible', 'sound', 'wise', 'reasonable', 'intelligent', 'realistic', 'logical', 'enlightened', 'sane', 'lucid', 'judicious', 'sagacious', 'grounded', 'reasoning', 'thinking', 'cognitive', 'cerebral', 'ratiocinative', 'reasoning', 'thinking', 'cognitive', 'cerebral', 'sane', 'balanced', 'normal', 'lucid'
    ],
    shop: [
        'store', 'market', 'supermarket', 'mart', 'boutique', 'emporium', 'hypermarket'
    ],
    friend: [
        'companion', 'pal', 'mate', 'buddy', 'partner', 'familiar', 'best', 'friend', 'intimate', 'close', 'friend', 'comrade', 'chum', 'crony', 'alter', 'ego', 'confidant', 'playmate', 'confidante', 'supporter', 'ally', 'associate', 'sponsor', 'advocate', 'patron', 'backer', 'partisan', 'protagonist', 'benefactor', 'adherent', 'well-wisher', 'supporter', 'ally', 'associate', 'sponsor', 'advocate', 'patron', 'backer', 'partisan', 'protagonist', 'benefactor', 'adherent', 'well-wisher'
    ],
    well: [
        'skilfully', 'expertly', 'adeptly', 'with skill', 'professionally', 'correctly', 'properly', 'effectively', 'efficiently', 'adequately', 'admirably', 'ably', 'conscientiously', 'proficiently', 'satisfactorily', 'nicely', 'smoothly', 'successfully', 'capitally', 'pleasantly', 'happily', 'famously', 'splendidly', 'agreeably', 'satisfactorily', 'nicely', 'smoothly', 'successfully', 'capitally', 'pleasantly', 'happily', 'famously', 'splendidly', 'agreeably', 'thoroughly', 'completely', 'fully', 'carefully', 'effectively', 'efficiently', 'rigorously', 'intimately', 'closely', 'completely', 'deeply', 'fully', 'personally', 'profoundly', 'carefully', 'closely', 'minutely', 'fully', 'comprehensively', 'accurately', 'in detail', 'in depth', 'extensively', 'meticulously', 'painstakingly', 'rigorously', 'scrupulously', 'assiduously', 'intensively', 'from top to bottom', 'methodically', 'attentively', 'conscientiously', 'exhaustively', 'favourably', 'highly', 'kindly', 'warmly', 'enthusiastically', 'graciously', 'approvingly', 'admiringly', 'with', 'admiration', 'appreciatively', 'with', 'praise', 'glowingly', 'with approbation', 
        'considerably', 'easily', 'very', 'much', 'significantly', 'substantially', 'markedly', 'fully', 'highly', 'greatly', 'completely', 'amply', 'very much', 'thoroughly', 'considerably', 'sufficiently', 'substantially', 'heartily', 'abundantly', 'possibly', 'probably', 'certainly', 'reasonably', 'conceivably', 'justifiably', 'decently', 'right', 'kindly', 'fittingly', 'fairly', 'easily', 'correctly', 'properly', 'readily', 'politely', 'suitably', 'generously', 'justly', 'in all', 'fairness', 'genially', 'civilly', 'hospitably', 'prosperously', 'comfortably', 'splendidly', 'in comfort', 'luxury', 'flourishingly', 'without', 'hardship', 'harmoniously', 'nicely', 'pleasantly', 'happily', 'politely', 'famously', 'amicably', 'amiably', 'agreeably', 'peaceably', 'genially', 'healthy', 'strong', 'sound', 'fit', 'blooming', 'robust', 'hale', 'hearty', 'satisfactory', 'good', 'right', 'fine', 'happy', 'fitting', 'pleasing', 'bright', 'useful', 'lucky', 'proper', 'thriving', 'flourishing', 'profitable', 'fortunate', 'advisable', 'useful', 'proper', 'prudent', 'agreeable', 'hole', 'bore', 'pit', 'shaft', 'waterhole', 'source', 'spring', 'pool', 'fountain', 'fount', 'source', 'fund', 'mine', 'treasury', 'reservoir', 'storehouse', 'repository', 'fount', 'wellspring', 'flow', 'trickle', 'seep', 'run', 'issue', 'spring', 'pour', 'jet', 'burst', 'stream', 'surge', 'discharge', 'trickle', 'gush', 'ooze', 'seep', 'exude', 'spurt', 'spout'
    ], 
    courage: [
        'bravery', 'nerve', 'fortitude', 'boldness', 'bottle', 'resolution', 'daring', 'guts', 'pluck', 'grit', 'heroism', 'mettle', 'firmness', 'gallantry', 'valour', 'spunk', 'fearlessness', 'intrepidity', 'hardihood', 'dauntlessness', 'lion-heartedness'
    ],
    party: [
        'faction', 'association', 'alliance', 'grouping', 'set', 'side', 'league', 'camp', 'combination', 'coalition', 'clique', 'coterie', 'schism', 'confederacy', 'cabal', 'get-together', 'celebration', 'do social', 'at-home', 'gathering', 'function', 'reception', 'bash', 'rave', 'festivity', 'knees-up', 'beano', 'social', 'gathering', 'shindig', 'soirée', 'wrap', 'party', 'rave-up', 'afterparty', 'get-together', 'celebration', 'do social', 'at-home', 'gathering', 'function', 'reception', 'bash', 'rave', 'festivity', 'knees-up', 'beano', 'social', 'gathering', 'shindig', 'soirée', 'wrap', 'party', 'rave-up', 'group', 'team', 'band', 'company', 'body', 'unit', 'squad', 'gathering', 'crew', 'gang', 'bunch', 'dream', 'team', 'detachment', 'litigant', 'defendant', 'participant', 'contractor', 'plaintiff', 'person', 'individual', 'somebody', 'someone', 'celebrate'
    ],
    revive: [
        'revitalize', 'restore', 'rally', 'renew', 'renovate', 'rekindle', 'kick-start', 'breathe', 'new', 'life', 'into', 'invigorate', 'reanimate', 'bring', 'round', 'awaken', 'animate', 'rouse', 'resuscitate', 'bring back to life', 'bring round', 'awaken', 'animate', 'rouse', 'resuscitate', 'come round', 'recover', 'quicken', 'spring', 'up again', 'refresh', 'restore', 'comfort', 'cheer', 'renew', 'resurrect', 'rejuvenate', 'reinvigorate', 'revivify'
    ]
};



