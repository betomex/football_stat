# [ТЕСТОВОЕ ЗАДАНИЕ] Страница для просмотра спортивной статистики.

Приложение представляет из себя сайт просмотра статистики ведущих европейских турниров по футболу (исходя из тех данных, которые доступны по бесплатной подписке). Сайт содержит следующие страницы:

Список лиг/соревнований
Список команд
Календарь лиги - список матчей лиги/соревнования
Календарь одной команды - список матчей команды
 
На страницах календаря можно указать фильтр по дате (с, по), а на страницах списка можно найти сущность по текстовому поиску.
После обновления страницы данные (год, команда, поисковой запрос) сохраняются.
В качестве публичного API для получения данных был взят ресурс https://www.football-data.org/. Это API содержит ограничения на бесплатном тарифе, однако были вытащены все доступные данные.

Из-за того, что некоторые запросы возвращают большой объём данных (Страница с командами, загрузка которых занимает ~5-10сек), было принято решение добавить элемент подгрузки данных.
Стоит также отметить, что из-за неточности формулировки ТЗ, отображение данных и сами данные были выбраны на усмотрение автора.

P.S Попробовал заdeployить проект на gh-pages, но с api на http не принимает (по всей видимости) запросы с https, который предоставляет github. Можете, конечно, ознакомиться, т.к приложение не падает, но будут бесконечные крутилки, так как нет возврата данных.

# [ATTENTION!] НАПИСАННОЕ ПРИЛОЖЕНИЕ НЕ СООТВЕТСТВУЕТ ПРИЛОЖЕНИЮ, ДОСТУПНОМУ ПО ССЫЛКЕ 
https://betomex.github.io/football_stat/
