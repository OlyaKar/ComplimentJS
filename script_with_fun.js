//база определений
//for men
const BaseTextM = ["сильный","волевой","умный","рассудительный","красивый","логичный","мужественный","прикольный","смелый","отзывчивый","деловой","деятельный","изобретательный","гениальный","проникновенный", "искушающий", "соблазняющий", "гипнотизирующий", "неповторимый", "страстный", "убеждающий", "искренний", "сердечный", "божественный", "дьявольский","ладный", "спортивный", "изумительный", "восхитительный", "соблазнительный", "безупречный", "статный", "эффектный", "роскошный", "сногсшибательный","величественный", "царский", "уверенный", "твердый", "целеустремленный", "золотой", "крепкий", "нежный","стойкий","накаченный","мускулистый", "непробиваемый", "любимый", "симпатичный", "добрый", "незабываемый", "родной", "сексуальный", "завлекающий", "жизнерадостный", "обворожительный","дерзкий", "томный", "манящий", "волнующий", "зазывающий", "околдовывающий", "сверкающий", "чарующий","неотступающий", "загадочный", "влекущий", "вызывающий", "провоцирующий", "необыкновенный", "жаждущий", "озорной", "экзотический", "шутливый", "юморной", "внушительный","солидный","заботливый", "единственный","платиновый","брилиантовый","умелый","очаровательный","дикий","необузданный","надежный","отважный", "бесстрашный", "храбрый", "справедливый", "порядочный", "благородный", "честный", "самостоятельный", "независимый", "гордый", "предприимчивый","честолюбивый","деловитый","серьезный","спокойный","трудолюбивый","хозяйственный","внимательный","ласковый","мягкий","любящий","чуткий","обаятельный","шикарный","импозантный","элегантный","респектабельный","стильный","пылкий","опытный","темпераментный","чувственный","романтичный","талантливый","мудрый","остроумный","эрудированный","интеллигентный","начитанный","образованный","любознательный","интересный","веселый","общительный","великодушный","щедрый", "бескорыстный", "аристократичный", "изысканный", "утонченный", "приветливый", "вежливый","галантный", "тактичный", "деликатный", "понимающий", "предупредительный","воспитанный", "скромный", "преданный", "верный", "таинственный", "милый", "хороший", "бесподобный", "лучший", "сказочный", "дорогой", "необходимый", "энергичный", "неотразимый","ненаглядный","замечательный","многогранный","яркий","незаменимый","домашний","забавный"];
//for women
const BaseTextW = ["красивая","умная","нежная","заботливая","скромная","весенняя","романтичная","грациозная","энергичная","понимающая","доброжелательная","сказочная","роскошная","великолепная","цветущая","ангельски-прекрасная","отменная","милосердная", "впечатлительная", "гостеприимная", "выразительная", "инициативная", "феноменальная", "шальная", "пикантная", "таинственная","убедительная", "порывистая", "пригожая", "обворожительная","лучезарная","артистичная","элегантная","блестящая","приятная","неподражаемая","милая","фантазерка неутомимая","гибкая","стройная","достойная","дерзкая","забавная","заводная","славная","огненная", "флиртующая", "общительная","дальновидная", "неординарная", "хозяйственная", "непостоянная", "альтруистичная","самоотверженная", "красноречивая", "великодушная", "всемогущая", "интригующая", "доверчивая", "спокойная", "человечная", "капризная","ослепительная","азартная","влюбленная","заманчивая","знойная","задиристо-лукавая","чарующая","благополучная","ранимая","ласковая","дивная","сердечная","медовая","беспечная","неизученная", "звездная", "созвучная","обожаемая","впечатляющая","волнующая","сияющая","увлекающая","смелая","бывалая","умелая","карнавальная","праздничная", "пластичная", "солнечная", "стремительная","гордая","талантливая","оглушительная","романтичная", "соблазнительная", "притягательная","сногсшибательная","блистательная","веселая","гениальная","жаркая","желанная","чудесная","долгожданная","самозабвенно-трудолюбивая","честолюбивая","профессиональная", "эффектная", "искренняя","честная","потрясная","безупречная","неземная","симпатичная","сообразительная","любезная","аппетитно-вкусная", "в любви искусная", "божественная", "изумительная", "просто восхитительная","фантастичная","сверкающая","покоряющая","ошеломительно-обалденная","необыкновенная","первоклассная","модная","светская","благородная","непосредственная","видная", "великая", "благословенная", "обаятельная", "незабвенная", "вездесущая","магическая","магнетическая","любознательно-пытливая","душевная","игривая","кокетливая","сладкая","певучая","вдохновенная","кипучая","деловая","фееричная","творчески увлеченная","живительная","пленительная","неунывающая","радость излучающая","умопомрачительная","отважная","рисковая","сладкоголосая","дурманящая","эмоциональная","яркая","внимательная", "роковая", "привлекательная", "своевольная", "воздушная","мудрая", "чуткая", "бесценная", "чистая","лучистая", "конфетно-мармеладная", "ванильно-шоколадная", "способная","природой одаренная", "удачливая", "дипломатичная", "радушная", "уверенная", "необычайная", "остроумная", "представительная", "загадочная","живописная", "прилежная", "ароматная", "будоражащая","восторженная", "порхающая","женственная", "ненаглядная", "необходимая", "авангардная", "изысканная", "возбуждающая", "простая и сложная", "безмерно надежная", "горячая", "щедрая","завораживающе прелестная", "неповторимо интересная", "неотразимая", "утонченная", "целеустремленная", "непринужденная", "проницательная", "непревзойденная", "изобретательная", "шаловливая", "лиричная", "любопытная", "практичная", "грациозно-сексуальная","трепетная", "решительная","гармонично-ладная","упоительная","неподкупная","пылкая","насмешливая", "упрямая", "вежливая", "жизнерадостная", "бодрая", "открытая","добрая","отзывчивая","жгучая","пламенная","чувственная", "удивительная","обольстительна","идеальная","невозможная","невообразимая", "драгоценная", "импульсивная", "естественная", "креативная", "золотая","исключительная", "благоухающая", "гипнотическая", "воспламеняющая", "заботливая", "совершенная", "верная","зажигательная", "неописуемая","благодарная", "основательная","сиятельная","экстравагантная", "мечтательная", "ироничная", "замечательная", "окрыляющая", "непокорная", "располагающая","броская", "восприимчивая", "добродушная","дружелюбная","темпераментная", "индивидуальная", "сокровенная", "уникальная", "сокрушительно эротичная", "безукоризненно эстетичная", "искусительная", "статная", "грандиозная", "дорогая", "серьезная","коммуникабельная", "прагматичная", "манящая", "диковинная", "беззаботная", "толковая", "царственная", "аккуратная", "волшебная", "деликатная", "трогательная", "непостижимая", "авантюрная","незаурядная", "сенсационная", "улыбчивая", "хлебосольная", "довольная", "озорная", "неуловимая", "хрупкая", "незаменимая", "любимая"];

var StringCompliment = "", sex, texSize, namePerson; 

//ф-ция для вывода на экран параметров выбора
function TryToPut() {
	sex = document.getElementById('SEX').value;
	texSize = document.getElementById('Length').value;
	namePerson = document.getElementById('NAME').value;
}

//Ф-ция определения длины текста
function LengthOfText() {
	var i=0;
	if (texSize == "3" || texSize == "") {i = 10;}
	if (texSize == "2") {i = 15;}
	if (texSize == "1") {i = 25;}
	return i;
}
//Ф-ция генерации текста
function Generate(TextLength, TextMain) {
	var rand;
	var flag;
	var Counter1 = [];
	
	for (var i=0;i<TextLength;i++)	{
		rand = Math.round( Math.random() * TextMain.length );
		Counter1[i] = rand;
		
		if (i==0)	{
			StringCompliment = StringCompliment.concat(TextMain[rand],", ");
		} 
		if (i!=0)	{
			flag=0;
			
			for (var j=i-1;j>0;j--)	{
				if (Counter1[i]==Counter1[j]) {
					flag=1;	}
			}
			if (flag==1) {	
				Counter1.splice (i,1);
				i--;
			}
			else {
				StringCompliment = StringCompliment.concat(TextMain[rand],", ");		
			}
		}
	}
}

//ф-ция основная по выбранным параметрам
function MainTry() {
	var Begin;
	
	TryToPut();
	LengthOfText();
	
	if (sex == "1" || sex == ""){
		if(namePerson=="")	{
			Begin = "Ты - самый ";
		}
		else{
			Begin = namePerson + ",ты - самый ";
		}
		
		Generate(LengthOfText(), BaseTextM);
	}
	if (sex == "2"){
		if(namePerson=="")	{
			Begin = "Ты - самая ";
		}
		else {
			Begin = namePerson + ",ты - самая ";
		}
		
		Generate(LengthOfText(), BaseTextW);
	}
	
	StringCompliment = Begin.concat(StringCompliment.substring(0, StringCompliment.length - 2),"!");
	document.getElementById('Compliment').value = StringCompliment;
	StringCompliment='';
}

function Message() {
document.getElementById('Compliment').value = StringCompliment;
}
//вызов функции
//MainTry();