/* eslint-disable max-len */

const mockSearchResponse = [
  {
    soc: 1190,
    title: 'Managers and directors in retail and wholesale',
    description: 'Retail and wholesale managers and directors plan, organise, direct and co-ordinate the operations of major retail and wholesale establishments in order to maximise business performance and meet financial goals.',
    qualifications: 'Entry requirements vary from company to company. Entrants may possess GCSEs/S grades, A levels/H grades, GNVQs/GSVQs, a BTEC/SQA award, a degree or equivalent qualification. Entry is also possible through promotion after gaining sufficient experience. NVQs/SVQs in Retail Operations are available at Level 4.',
    tasks: ' appoints staff, assigns tasks and monitors and reviews staff performance;\n liaises with other staff to provide information about merchandise, special promotions etc. to customers;\n ensures that adequate reserves of merchandise are held and that stock keeping is carried out efficiently;\n ensures customer complaints and queries regarding sales and service are appropriately handled;\n oversees the maintenance of financial and other records and controls security arrangements for the premises;\n authorises payment for supplies received and decides on vending price, discount rates and credit terms;\n examines quality of merchandise and ensures that effective use is made of advertising and display facilities.',
    add_titles: [
      'Manager, branch (wholesale, retail trade)',
      'Manager, wholesale',
      'Manager, shop',
      'Manager, operations, wholesale',
      'Manager, circulation',
      'Manager (wholesale trade)',
      'Manager, room, show',
      'Manager, shop (agriculture)',
      "Manager, shop, butcher's",
      'Manager, florist',
      'Manager, station, service',
      'Manager, dairy',
      'Manager, production (wholesale, retail trade)',
      'Manager (off-licence)',
      'Manager, service (retail trade)',
      'Manager (filling station)',
      'Manager',
      "Manager (builders' merchants)",
      'Manager, room, sales',
      'Manager, district (wholesale trade)',
      'Manager, practice (opticians)',
      'Manager, store (wholesale, retail trade)',
      "Manager, butcher's",
      "Manager, tailor's",
      'Manager (retail trade)',
      'Manager, site (retail trade)',
      'Manager, sales, fleet',
      'Manager (garden centre)',
      'Director (wholesale trade)',
      'Manager, district (retail trade)',
      'Licensee (petrol station)',
      'Manager (livestock dealing)',
      'Manager, shift (wholesale, retail trade)',
      'Manager, area (retail trade)',
      'Manager, bookshop',
      'Manager (fuel merchant)',
      'Manager, stores (wholesale, retail trade)',
      'Director (retail trade)',
      'Director, retail',
      'Manager (timber merchants)',
      'Manager, operations (wholesale, retail trade)',
      'Manager, order, mail',
      'Manager (NAAFI: shop)',
      'Manager, shop (retail, wholesale trade)',
      'Manager, shop, farm',
      'Manager (petrol station)',
      'Manager, centre, garden',
      'Director, franchise',
      "Manager, fishmonger's",
      'Manager, showroom',
      'Manager, supermarket',
      'Manager, shop, charity',
      'Manager, technical (wholesale, retail trade)',
      'Manager, sales (wholesale trade)',
      'Manager, licence, off',
      'Manager (steel stockholders)',
      'Manager, shop (retail trade: pharmacists)',
      'Manager (pawnbrokers)',
      'Manager, sales (retail trade)',
      'Manager, station, petrol',
      'Manager, operations, retail',
      'Manager, stall, book',
      'Manager, club, clothing',
      'Manager, trade',
      'Manager (mail order establishment)',
      'Manager, shop (horticulture)',
      'Director, technical (wholesale, retail trade)',
      'Manager, retail',
      'Director, managing (wholesale, retail trade)',
      "Manager, shop, fishmonger's",
    ],
  },
  {
    soc: 7111,
    title: 'Sales and retail assistants',
    description: 'Sales and retail assistants demonstrate and sell a variety of goods and services in shops, stores, showrooms and similar establishments.',
    qualifications: 'No minimum academic qualifications are required although some employers may require GCSEs/S grades. Training is typically provided on-the-job. Apprenticeships and NVQs/SVQs in Retail Operations are available at various levels.',
    tasks: ' discusses customer requirements, including type and price range of goods/services desired;\n advises customer on selection, purchase, use and care of merchandise and quotes prices, discounts and delivery times;\n advises customer making major purchase on credit terms and arranges finance as appropriate;\n receives full or partial payment, checks validity of form of payment, writes or prints bill, receipt or docket and packages merchandise for customer;\n arranges and replenishes goods on display stands, undertakes stock checks and assists with the receipt of deliveries from suppliers into the stock room;\n handles returns and deals with customer complaints.',
    add_titles: [
      'Attendant, room, show',
      'Salesman, warehouse',
      "Assistant, fruiterer's",
      'Assistant (retail trade)',
      'Assistant, dairy (retail trade)',
      'Assistant, services, customer (retail trade)',
      'Operative, kiosk (retail trade)',
      'Helper, part-time (retail trade)',
      'Player, team (retail trade)',
      'Salesman, milk (retail trade)',
      'Worker, retail',
      'Assistant, bookstall',
      'Hand, first (retail trade)',
      "Assistant, seedsman's",
      'Salesman, fish and fruit',
      'Consultant, food (retail trade)',
      'Assistant, off-licence',
      'Counterhand (wholesale, retail trade)',
      'Hand, bacon',
      'Salesman, TV',
      'Assistant, sales',
      'Associate, sales (retail trade)',
      'Hand, provision',
      'Associate, customer (retail trade)',
      "Assistant, newsagent's",
      'Counterman (retail trade)',
      "Assistant, florist's",
      'Consultant, fashion (retail trade)',
      'Salesman, meat',
      "Assistant, furrier's",
      'Seller, fish and chips',
      'Salesman, market (wholesale trade)',
      'Assistant, haberdashery',
      'Salesman, fish and poultry',
      'Attendant, stores (retail trade)',
      'Assistant, centre, garden',
      'Member, team (retail trade)',
      'Agent, laundry',
      'Boy, programme',
      'Operator, kiosk (retail trade)',
      'Seller, book',
      'Adviser, service, customer (retail, wholesale trade)',
      'Assistant, bakery (retail trade)',
      "Assistant, draper's",
      'Salesman, indoor',
      "Agent, cleaner's, dry",
      "Assistant, confectioner's",
      'Consultant, bridal (retail trade)',
      'Assistant, away, take',
      'Consultant, beauty (retail trade)',
      'Salesman (building construction)',
      'Seller, programme',
      'Assistant, operations (retail trade)',
      'Worker, shop',
      'Bookseller',
      "Assistant, merchant's",
      'Assistant, service, customer (wholesale trade)',
      'Assistant, stall, book',
      "Salesman, butcher's",
      'Salesman, counter',
      'Assistant, shop',
      'Help, part-time (retail trade)',
      'Salesman, shop',
      "Assistant, stationer's",
      'Seller, book (Stationery Office)',
      'Adviser, sales',
      'Consultant, furniture',
      'Agent, receiving, laundry',
      "Assistant, grocer's",
      'Associate, retail',
      'Assistant, NAAFI',
      'Shopper, personal',
      'Assistant, takeaway',
      'Consultant, cosmetics',
      'Counsellor, beauty (retail trade)',
      'Assistant, stores (retail trade)',
      'Consultant, carpet (retail trade)',
      'Stylist, personal (retail trade)',
      "Assistant, dairyman's (retail trade)",
      'Assistant, office, sub-post',
      'Assistant, store (retail trade)',
      "Assistant, bookseller's",
      'Assistant, customer (retail trade)',
      'Assistant, confectioner and tobacconist',
      "Assistant, pawnbroker's",
      'Salesman, bread (retail trade)',
      'Newsboy (bookstall)',
      'Assistant, office, post',
      'Assistant, retail',
      'Counterhand (take-away food shop)',
      'Consultant, sales (retail trade)',
      'Assistant, counter',
      'Cutter, cheese',
      "Assistant, perfumer's",
      'Adviser, customer (retail trade)',
      'Salesman, showroom',
      "Assistant, jeweller's",
      'Salesman, television',
      'Member, cast (retail trade)',
      'Server (take-away food shop)',
      'Attendant, kiosk',
      'Salesman, motor',
      'Dairyman (retail trade)',
      'Assistant, room, show',
      'Assistant (take-away food shop)',
      'Salesman, fish',
      'Assistant, kiosk',
      'Consultant, perfumery',
      'Member, team, customer',
      'Assistant, room, sale (wholesale, retail trade)',
      'Salesman, retail',
      'Assistant, service, customer (retail trade)',
      'Receiver (laundry, launderette, dry cleaning)',
      "Assistant, poulterer's",
      'Inspector, NAAFI',
      'Worker, shop (take-away food shop)',
      "Salesman, fishmonger's",
      'Counterman (take-away food shop)',
      "Agent, dyer's",
      'Worker, shop (retail trade)',
      'Assistant, floor, shop (retail trade)',
      'Assistant, delicatessen',
      "Assistant, mercer's",
      "Assistant, dealer's (wholesale, retail trade)",
      'Fitter, shoe (retail trade)',
      'Salesman (retail trade)',
    ],
  },
  {
    soc: 1254,
    title: 'Shopkeepers and proprietors – wholesale and retail',
    description: 'Shopkeepers and proprietors in this unit group co-ordinate, direct and undertake the activities in the running of small, independent retail and wholesale establishments.',
    qualifications: 'There are no formal academic entry requirements. A range of management and leadership courses in retail is available, in addition to NVQs/ SVQs in at Levels 2, 3 and 4.',
    tasks: ' defines the market position for the business, decides what to sell, forecasts demand and develops the brand image of the business;\n determines staffing, financial, material and other short- and long-term requirements;\n oversees staff training, rotas and the allocation of work;\n provides information about merchandise to staff and customers and ensures customer complaints are appropriately dealt with;\n ensures that adequate reserves of merchandise are held and orders new stock as required;\n maintains financial and other shop records and controls security arrangements for the premises;\n authorises payment for supplies received and decides on vending price and credit terms;\n examines quality of merchandise and ensures that effective use is made of advertising and display facilities.',
    add_titles: [
      'Owner, centre, garden',
      'Dealer, car',
      'Draper',
      'Haberdasher',
      'Owner (milk delivery round)',
      'Merchant, coal',
      'Fruiterer',
      'Merchant, timber',
      'Victualler, licensed',
      'Seller, book, antiquarian',
      'Chandler',
      'Clothier and outfitter',
      'Holder, stock, steel',
      'Owner (post office)',
      'Owner (retail trade)',
      'Merchant, agricultural',
      'Owner, shop, retail',
      "Owner, shop, butcher's",
      'Furrier (retail trade)',
      'Milliner (wholesale, retail trade)',
      'Trader, motor',
      'Dealer, antiques',
      'Retailer, fashion',
      'Dealer, tyre',
      'Manager (retail trade: mobile shop)',
      'Trader, eBay',
      'Factor, motor',
      'Factor, coal',
      'Bookseller, antiquarian',
      'Merchant, potato',
      'Owner, store, general',
      'Ironmonger',
      'Furnisher (retail trade)',
      'Seller, map',
      'Owner (butchers)',
      'Hosier and haberdasher',
      'Mercer',
      'Dealer, art',
      'Vendor, horsemeat',
      'Dealer, pig',
      'Licensee (off-licence)',
      'Shopkeeper',
      'Cheesemonger',
      'Owner (petrol station)',
      'Stationer',
      'Stockholder, steel',
      'Jeweller (retail trade)',
      'Dealer, sheep',
      'Tailor, merchant',
      'Merchant, fish',
      'Dealer, stamp',
      "Merchant, builders'",
      'Dealer, livestock',
      'Agent, newspaper',
      'Owner (wholesale trade)',
      'Merchant, wine',
      'Owner (fishmongers)',
      'Clothier (retail trade)',
      'Owner, shop, florist',
      'Owner (garden centre)',
      'Dealer, motor',
      'Specialist, book, antiquarian',
      'Dealer, accessories, motor',
      'Keeper, store, general',
      'Dealer, cattle',
      'Owner (street stall)',
      'Hosier',
      'Dealer, antique',
      'Dealer (wholesale, retail trade)',
      'Owner (florists)',
      'Agent, news',
      'Owner (pet shop)',
      'Trader (retail trade)',
      'Merchant, glass',
      'Dealer, poultry',
      'Owner (retail pharmacy)',
      'Distributor (wholesale, retail trade)',
      'Newsagent',
      'Owner (off-licence)',
      'Retailer, fish',
      'Hatter (retail trade)',
      'Retailer',
      'Owner (general store)',
      'Confectioner and tobacconist',
      'Keeper, stall, book',
      'Supplier (wholesale, retail trade)',
      'Numismatist',
      'Owner, station, filling',
      'Dealer, store, marine',
      'Seedsman (retail trade)',
      'Off-licensee',
      'Owner (filling station)',
      'Dealer, game',
      'Philatelist',
      'Wholesaler',
      'Owner (delicatessen)',
      'Outfitter (retail trade)',
      'Jeweller, retail',
      'Keeper, store, drug',
      'Dealer, book',
      'Grocer',
      'Tobacconist',
      'Owner, station, petrol',
      'Seller, eBay',
      'Greengrocer',
      'Owner, store, drug',
    ],
  },
  {
    soc: 7112,
    title: 'Retail cashiers and check-out operators',
    description: 'Retail cashiers and check-out operators accept payments from customers and give change in respect of sales or services.',
    qualifications: 'There are no minimum academic requirements although some employers may require GCSEs/S grades or relevant experience. Training is typically provided on-the-job. NVQs/SVQs in Retail Operations are available at Levels 1 and 2.',
    tasks: ' records cost of each item on cash register or by use of bar code reader and totals the amount to be paid;\n receives cash, cheque or debit or credit card payment, checks validity of form of payment, gives change and issues receipts for purchase;\n debits customer’s account in respect of purchases or services;\n monitors fuel taken by self-service customers or refuels vehicle if required;\n maintains transaction records as requested.',
    add_titles: [
      'Assistant, sales, petrol',
      'Assistant, sales, forecourt',
      'Attendant, pump (garage)',
      'Attendant, station, filling',
      'Pumpman (petrol station)',
      'Cashier, check-out',
      'Assistant, forecourt',
      'Controller, EPOS',
      'Cashier, sales',
      'Cashier, shop',
      'Assistant, till',
      'Attendant, station, petrol',
      'Assistant, supermarket',
      'Attendant, garage (petrol station)',
      'Refueller',
      'Assistant, scanner (retail trade)',
      'Assistant, sales, supermarket',
      'Member, team, customer (retail:',
      'Cashier, supermarket',
      'Operator, check-out',
      'Cashier, station, petrol',
      'Assistant, station, petrol',
      'Attendant, pump, petrol',
      'Assistant, shop, forecourt',
      'Operative, check-out',
      'Checker-out',
      'Assistant, scanning (retail trade)',
      'Operator, cash and wrap',
      'Operator, scanning (retail trade)',
      'Operator, consol (petrol station)',
      'Assistant, cash and wrap',
      'Cashier, forecourt',
      'Assistant, petrol',
      'Operator, scanner (retail trade)',
      'Assistant, garage (petrol station)',
      'Salesman, forecourt (garage)',
      'Adviser, customer',
      'Salesman, petrol (garage)',
      'Attendant, petrol',
      'Cashier',
      'Cashier (retail trade)',
      'Attendant, forecourt',
      'Clerk, check-out',
      'Clerk, scanner (retail trade)',
      'Assistant, sales',
      'Clerk, scanning (retail trade)',
      'Clerk, EPOS',
      'Assistant, check-out',
      'Operator, till',
      'Operator, console (petrol station)',
      'Operator, EPOS',
      'Assistant, general (retail trade:',
      'Cashier (wholesale trade)',
      'Attendant, station, service',
    ],
  },
  {
    soc: 7125,
    title: 'Merchandisers and window dressers',
    description: 'Merchandisers and window dressers replenish stocks of goods in stores, advise retailers on the optimum display of merchandise and create displays of merchandise in shop windows.',
    qualifications: 'Entrants typically possess a professional qualification from the British Design Society, or an approved vocational qualification. Candidates usually require GCSEs/S grades. Degrees and apprenticeships are available, as well as NVQs/SVQs in Visual Merchandising at Levels 1 and 2.',
    tasks: ' monitors stock movements, considers customer requirements and assists customers in completing orders;\n supplies information about the product to the retailer and sales staff and deals with customer enquiries;\n consults with advertising and sales staff and advises retailers on the optimal display of a product and of any promotions;\n implements plans from display designers or display managers or develops ideas and plans for merchandise display or window dressing;\n prepares area for new display, constructs or assembles displays from a variety of materials, and dismantles existing displays and returns merchandise to relevant departments;\n provides feedback about displays to senior managers.',
    add_titles: [
      'Stylist, film',
      'Associate, merchandise',
      'Assistant, display (retail trade:',
      'Merchandiser',
      'Stylist, fashion',
      'Manager, merchandise, visual',
      'Supervisor, display',
      'Trimmer, window',
      'Artist, display',
      'Hand, display (retail trade)',
      'Displayman, window',
      'Manager, display',
      'Merchandiser, retail',
      'Dresser, window',
      'Merchandiser, visual',
      'Leader, team',
      'Manager, merchandising, visual',
      'Assistant, merchandising, visual',
      'Assistant, merchandising',
      'Displayman (retail trade)',
      'Executive, merchandising',
      'Stylist, photographic',
      'Merchandiser, sales',
      'Associate, visual (retail trade)',
      'Inspector (window dressing)',
    ],
  },
  {
    soc: 9259,
    title: 'Elementary sales occupations n.e.c.',
    description: 'Workers in this unit group perform a variety of elementary sales related occupations not elsewhere classified in MINOR GROUP 925: Elementary Sales Occupations.',
    qualifications: 'There are no minimum academic entry requirements. Some on-the-job training may be provided.',
    tasks: ' strips old posters from hoardings and fits new posters using brushes and working from a ladder if necessary;\n collects shopping baskets and trolleys in and around wholesale/retail establishments and positions near entrance to store;\n offers shopping baskets to customers entering retail establishments;\n wraps and packs goods for customers;',
    add_titles: [
      'Inspector, site (advertising)',
      'Boy, trolley (wholesale, retail trade)',
      'Shopper, home',
      'Controller, code (wholesale, retail trade)',
      'Checker, ticket (wholesale, retail trade)',
      'Collector, trolley (wholesale, retail trade)',
      'Fixer, advertisement',
      'Man, basket (retail trade)',
      'Counter, stock (wholesale, retail trade)',
      'Inspector, advertisement',
      'Poster, bill',
      'Controller, price (wholesale, retail trade)',
      'Installer, advertising',
      'Assistant, integrity, price',
      'Issuer, basket (retail trade)',
      'Caller (wholesale, retail trade)',
      'Caller, checkout',
      'Greeter (retail trade)',
      'Controller, maintenance, file (wholesale, retail trade)',
      'Hanger, poster',
      'Assistant, trolley (wholesale, retail trade)',
      'Attendant, trolley (wholesale, retail trade)',
      'Assistant, shopping, internet',
      'Inspector, advertising',
      'Shopper, internet (retail trade)',
      'Operator, maintenance, file (wholesale, retail trade)',
      'Pricer (retail trade)',
      'Picker (retail trade)',
      'Attendant, minibar',
      'Sticker, bill',
      'Hand, advertisement',
      'Picker, order (retail trade)',
      'Inspector, bill (advertising)',
      'Tagger (wholesale, retail trade)',
    ],
  },
  {
    soc: 7130,
    title: 'Sales supervisors',
    description: 'Sales supervisors oversee operations and directly supervise and coordinate the activities of sales and related workers in retail and wholesale establishments.',
    qualifications: 'No minimum academic qualifications are required although some employers may require GCSEs/S grades or A levels/H grades along with relevant work experience. NVQs/SVQs in Retail Operations are available at Levels 1 and 2, and apprenticeships may be available in some areas. Professional qualifications are relevant in some areas of selling and may be an advantage.',
    tasks: ' directly supervises and coordinates the activities of sales and related workers;\n establishes and monitors work schedules to meet sales and productivity targets;\n liaises with managers and other departments to resolve operational problems;\n determines or recommends staffing and other needs to meet sales and productivity targets;\n reports as required to managerial staff on departmental activities.',
    add_titles: [
      'Foreman, dairy (retail trade)',
      'Foreman (petrol station)',
      'Supervisor, sales (retail trade: delivery round)',
      'Supervisor, trade (retail trade)',
      'Manager, trading (retail trade)',
      'Foreman, shop (retail trade)',
      'Foreman, rounds',
      'Supervisor, retail',
      'Supervisor, market',
      'Manager, provisions',
      'Foreman (retail trade)',
      'Manager, product (retail trade)',
      'Supervisor, telesales',
      'Manager, line (retail trade)',
      'Supervisor, produce',
      'Manager, concessions',
      'Manager, floor (retail, wholesale trade)',
      'Controller, till',
      'Manager, replenishment',
      'Supervisor, kiosk (retail trade)',
      'Leader, team, telesales',
      'Manager, counter (retail trade)',
      'Manager, depot (wholesale, retail trade)',
      'Manager, produce (retail trade)',
      'Supervisor, cash (retail trade)',
      'Supervisor, room, show',
      'Manager, clothing (retail trade)',
      'Supervisor, centre, service (electricity supplier)',
      'Supervisor, shop (retail trade)',
      'Manager, forecourt',
      'Manager, counter, trade',
      'Assistant, senior (retail trade)',
      'Walker, floor',
      'Inspector, rounds (wholesale, retail trade)',
      'Manager, grocery',
      'Walker, shop',
      'Manager, parts',
      'Superintendent, floor (department store)',
      'Supervisor, store (retail trade)',
      'Foreman (provision merchants)',
      'Foreman, forecourt',
      'Controller, deli',
      'Manager, food, fresh (retail trade)',
      'Inspector, round (wholesale, retail trade)',
      'Supervisor, check-out',
      'Manager, bakery (retail trade)',
      'Leader, team, operation, sales (retail trade)',
      'Checker (dairy)',
      'Manager, concession',
      'Manager, section (retail trade)',
      'Foreman (dairy: retail trade)',
      'Superintendent (retail trade)',
      'Supervisor (retail, wholesale trade)',
      'Leader, section (retail trade)',
      'Leader, team (retail trade)',
      'Supervisor, counter (wholesale, retail trade)',
      'Supervisor, supermarket',
      'Manager, department (retail trade)',
      'Manager, check-out',
      'Supervisor, sales (retail trade)',
      'Foreman, district (retail trade)',
    ],
  },
  {
    soc: 7129,
    title: 'Sales related occupations n.e.c.',
    description: 'Workers in this unit group perform a variety of sales occupations not elsewhere classified in MINOR GROUP 712: Sales Related Occupations.',
    qualifications: 'There are no formal academic entry requirements. Training is typically received on-the-job, supplemented by short courses covering practical skills and details of the product or service being sold. NVQs/SVQs in Selling are available at Levels 2 and 3.',
    tasks: ' assesses characteristics of goods/services being sold and decides on main selling points;\n advises clients and agents on insurance related problems, seeks new outlets for business and quotes premiums, bonus rates, tax concessions, etc.;\n obtains orders for advertising, financial, catering, printing and transportation services;\n organises parties in private households to sell clothing, fashion accessories, giftware and other goods;\n provides demonstrations of a product within retail stores, exhibitions and trade fairs to promote interest amongst potential customers;\n negotiates agreements for the passage of supply lines over or under land/property and the siting of supporting structures and other items.',
    add_titles: [
      'Negotiator',
      'Demonstrator, technical',
      'Representative, publicity',
      'Agent, emigration',
      'Buyer, job',
      'Salesman (retail trade: party plan sales)',
      'Officer, wayleave',
      'Promoter, sales',
      'Consultant, sales (insurance)',
      'Operator, hire, skip',
      'Seller, space (advertising)',
      'Finder, land',
      'Salesman, land (estate agents)',
      'Representative, service, railway',
      'Representative (retail trade)',
      'Viewer (estate agents)',
      'Agent, hire, car',
      'Representative, financial',
      'Representative, newspaper',
      'Renter, film',
      'Dealer (party plan sales)',
      'Representative, sales (retail trade)',
      'Secretary, club',
      "Agent, brewer's",
      'Canvasser, advertising',
      'Controller, hire, plant',
      'Planner, party',
      'Manager, service, retail (railways)',
      'Recruiter',
      'Representative (retail trade: party plan sales)',
      'Canvasser (advertising)',
      'Contractor, hire, plant',
      'Traveller, advertising',
      'Traveller, commercial',
      'Representative, shipping',
      'Coordinator, hire',
      'Demonstrator-salesman',
      'Representative, sales',
      'Townsman',
      'Operator, rental',
      'Canvasser (transport)',
      'Executive, sales, inbound (insurance)',
      'Traveller, insurance',
      'Demonstrator',
      'Organiser, party (retail trade: party plan sales)',
      'Agent, hiring, film',
      'Salesman',
      'Demonstrator-consultant',
      'Salesman, property',
      'Recruiter, membership',
      'Agent, railway',
      'Hirer',
      'Consultant, energy (electricity, gas suppliers)',
      'Promoter (wholesale, retail trade)',
      'Agent, rental, car',
      'Representative, sales (telecommunications)',
      'Viewer, house',
      'Representative, advertising',
      'Canvasser, freight',
      'Representative, finance',
      'Agent, commission (insurance)',
      'Agent, traffic (canals)',
      'Supervisor, hire, car',
      'Supervisor, hire, plant',
      'Escort (estate agents)',
      'Representative, display',
      'Agent, mercantile',
      'Adviser, sales, insurance',
      "Broker, printer's",
      'Representative, catering',
      'Representative, freight',
      "Agent, company's, tug",
      'Traveller, advertisement',
      'Agent, foreign',
      'Agent, brewery',
      'Representative',
      'Representative, commercial',
      'Salesman, insurance',
      'Hirer, car',
      'Controller, hire',
      'Canvasser, insurance',
      'Adviser, sales (insurance)',
      'Consultant, food',
      'Representative, space (printing)',
      'Agent, forwarding',
      'Agent, naturalisation',
      'Canvasser, traffic',
      'Agent, bank',
      'Planner, sales (party plan)',
      'Representative, sales (retail trade: party plan sales)',
      'Adviser, sales, inbound (insurance)',
      'Agent, general',
      'Salesman, space, advertising',
      'Representative, advertisement',
      'Canvasser (insurance)',
      'Agent (party plan sales)',
      'Salesman, advertising',
      'Controller, hire and sales',
      'Agent, passport',
      'Adviser, membership',
      'Representative, traffic (air transport)',
      'Canvasser, advertisement',
      'Contractor, posting, bill',
      'Distributor, film',
    ],
  },
  {
    soc: 7123,
    title: 'Roundspersons and van salespersons',
    description: 'Roundspersons and van salespersons deliver and sell food, drink and other goods by calling on householders or by selling from a mobile shop or van and call on households to collect and receive payment for laundered or similarly serviced articles.',
    qualifications: 'No academic qualifications are required but candidates should hold a clean driving licence. Off- and on-the-job training is provided.',
    tasks: ' loads vehicle with food, drink, or articles that have been laundered, etc.;\n drives vehicle over established route and parks at recognised stopping places or households;\n calls at customers’ premises and delivers ordered goods;\n calls out, rings bell or otherwise attracts attention to the items on sale;\n sells goods, records deliveries, takes further orders or articles requiring servicing and collects cash or prepares bill;\n returns to depot and hands in unsold goods and cash.',
    add_titles: [
      'Dairyman (retail trade: delivery round)',
      'Driver and collector (laundry, launderette, dry cleaning)',
      'Milkman (milk retailing)',
      'Supervisor, rounds (retail trade: delivery round)',
      'Salesman (retail trade: mobile shop)',
      'Salesman, shop',
      'Salesman-driver',
      'Salesman, van',
      'Milkman',
      'Roundsman',
      'Manager, shop (retail trade: mobile shop)',
      'Retailer (mobile shop)',
      'Salesman, bread (retail trade: delivery round)',
      "Assistant, grocer's",
      'Boy, delivery (bakery)',
      'Traveller, grocers',
      'Manager, shop, mobile',
      'Supervisor, round (retail trade: delivery round)',
      'Deliveryman (retail trade: delivery round)',
      'Vendor, ice-cream',
      'Salesman, milk (retail trade: delivery round)',
      'Man, van',
      'Salesman, drinks, soft',
      'Salesman, cream, ice',
      'Trader',
      'Shopkeeper (mobile shop)',
      'Deliveryman (retail milk trade)',
      "Deliveryman, baker's",
      'Traveller, van',
      'Boy, delivery (dairy)',
      'Greengrocer (mobile shop)',
      'Salesman',
      'Grocer',
      'Seller',
      'Vendor, cream, ice',
      'Salesman, ice-cream',
      'Vendor, milk',
      'Deliverer, milk',
      'Driver-salesman',
      'Retailer, milk (retail trade: delivery round)',
    ],
  },
  {
    soc: 7121,
    title: 'Collector salespersons and credit agents',
    description: 'Collector salespersons and credit agents visit private households to obtain orders and collect payments for goods and services.',
    qualifications: 'No academic qualifications are required. Training is provided on-the-job and may be supplemented by specialist short courses provided by employers.',
    tasks: ' calls on household, explains purpose of call and displays or describes goods/services on offer;\n emphasises main selling point of goods/services to stimulate customer interest;\n quotes prices and terms, collects any payments and completes hire purchase or credit arrangements;\n distributes advertising literature and sample goods;\n makes follow-up calls to obtain further orders.',
    add_titles: [
      'Agent (door-to-door sales)',
      'Assistant, canvassing (insurance)',
      'Agent, assurance',
      'Collector-salesman',
      'Merchant (wholesale, retail trade: credit trade)',
      'Representative (retail trade: credit trade)',
      'Representative, sales (mail order house)',
      'Traveller, drapers, credit',
      'Distributor (door-to-door sales)',
      'Collector and salesman',
      'Canvasser and collector',
      'Representative, sales (retail trade: door-to-door sales)',
      'Consultant, beauty (retail trade: door-to-door sales)',
      'Tallyman',
      'Lender, money',
      'Representative (mail order house)',
      'Traveller (retail trade)',
      'Manager (retail trade: party plan sales)',
      'Trader, credit',
      'Representative, insurance',
      'Agent, sales, insurance',
      'Agent, district (insurance)',
      'Traveller, commercial',
      'Agent (wholesale, retail trade: credit trade)',
      'Salesman (retail trade: door-to-door sales)',
      'Merchant (door-to-door sales)',
      'Agent, credit',
      'Salesman, credit',
      'Draper, credit',
      'Salesman (retail trade: credit trade)',
      'Merchant (party plan sales)',
      'Agent, insurance',
      'Representative (insurance)',
      'Agent (mail order house)',
      'Collector (insurance)',
      'Agent, club',
      'Representative (retail trade: door-to-door sales)',
      'Canvasser',
      'Salesman-collector',
      'Manager, plan, party',
      'Agent',
      'Collector, insurance',
      'Superintendent of canvassers',
      'Representative, credit',
      'Salesman (mail order house)',
      'Traveller-salesman (credit trade)',
      'Salesman, travelling (retail trade)',
      'Agent and collector (insurance)',
      'Collector-agent (insurance)',
    ],
  },
];
module.exports = lmiNock => () =>
  Object.assign(lmiNock()
    .get('/api/v1/soc/search')
    .query(true)
    .reply(200, () =>
      mockSearchResponse
    ), { mockResponse: mockSearchResponse });
