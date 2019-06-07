(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lang-pl-PL"],{1383:function(e,a,o){"use strict";o.r(a),o.d(a,"dateTimeFormats",function(){return i});var i={short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",hour12:!1}};a["default"]={about_directus:"O aplikacji Directus",activity:"Aktywności",my_activity:"Moje aktywności",activity_log:"Log aktywności",activity_outside_directus:"Ten element został utworzony poza Directus.",admin_email:"Email admina",admin_password:"Hasło admina",additional_info:"Dodatkowe informacje",add_new:"Dodaj nowy",add_field_filter:"Dodaj filtr pola",add_note:"Dodaj użyteczne informacje dla użytkowników...",admin_settings:"Ustawienia admina",almost_done_options:"Prawie skończone! Teraz możesz przejrzeć opcje poniżej.",almost_done_copy:"Każdy interfejs może być skrojony idealnie do Twoich potrzeb. Poniżej znajdują się wszystkie możliwe ustawienia dla tego pola - pamiętaj, że tylko niektóre są wymagane.",all:"Wszystkie",statuses:"Statusy",api_url:"API URL",api_installed:"API pomyślnie zainstalowane",auto_generate:"Automatycznie generuj",auto_generated:"Automatycznie wygenerowane...",batch:"Grupowo",batch_edit:"Grupowa edycja elementów: {collection}",batch_delete:"Grupowe usunięcie",batch_delete_confirm:"Żaden element nie został zaznaczony | Na pewno chcesz usunąć ten element? Tej akcji nie będzie można cofnąć. | Na pewno chcesz usunąć {count} elementów? Tej akcji nie będzie można cofnąć.",between:"Pomiędzy",both:"Oba",bookmarks:"Zakładki",cancel:"Anuluj",change_project:"Zmień projekt",choose_one:"Wybierz jeden",choose_project:"Wybierz projekt",choose_interface:"Zmień interfejs, za pomocą którego te dane będą zmieniane.",clear:"Wyczyść",click_to_toggle_all_none:"Kliknij, by przełączyć całą kolumnę w stan nie/aktywny",connection:"Połączenie",collection:"Kolekcja",collections_and_fields:"Kolekcje i pola",collection_invalid_name:"Nieprawidłowa nazwa kolekcji",collection_updated:"{collection} Kolekcja zaktualizowana",collection_removed:"{collection} Kolekcja usunięta",collection_names_cannot_be_changed:"Nazwy kolekcji nie mogą zostać zmienione w tym momencie.",collections:"Kolekcje",collection_count:"Brak kolekcji | Jedna kolekcja | {count} kolekcje","collections-directus_files":"Pliki","collections-directus_users":"Użytkownicy","collections-directus_activity":"Aktywności",comment:"Komentarz",comments:"Komentarze",coming_soon:"Już wkrótce",contains:"Zawiera",config_error:"Brak pliku konfiguracyjnego",config_error_copy:"Upenij się, że stworzyłeś plik konfiguracyjny dla tej aplikacji",collection_contains_items:"{collection} zawiera {count} elementów",currently_selected:"Obecnie zaznaczony: {thing}",create:"Stwórz",creating_item:"Tworzenie elementu",creating_item_page_title:"Tworzenie elementu: {collection}",creating_role:"Tworzenie roli",create_role:"Stwórz rolę",create_field:"Stwórz pole",update_field:"Aktualizuj pole",create_collection:"Stwórz kolekcję",database_connection:"Połączenie z bazą danych",database_connection_copy:"Następnie, potrzebujemy wiedzieć jak połączyć się z bazą danych, przy pomocy której będzie zarządzany ten projekt.",datatype:"Typ danych",db_datatype:"{db} typ danych",editing_my_profile:"Edytowanie mojego profilu",embed:"Osadzony",embed_placeholder:"YouTube, Vimeo, lub inny link",fieldtypes:{alias:"Pola, które nie zapisują danych i/lub nie mają odpowiadających kolumn w bazie danych",array:"Standardowy format tablicowy zwracany przez API",datetime:"Data i czas zapisana w formacie ISO, np.: 2018-09-19T14:00:43.381Z",date:"Data, np.: 2018-09-19",time:"Czas, np.: 14:09:22",file:"Klucz obcy nawiązujący do directus_files.id",group:"Grupuje pola razem pod względem wizualnym - pola-dzieci zapisują grupy do directus_fields.group",integer:"Liczba całkowita",decimal:"Liczba zmiennoprzecinkowa",json:"Standardowy format JSON zwracany przez API",lang:"Charakterystyczne dla przekładów, przechowuje klucz języka",m2o:"Relacja wiele-do-jednego",o2m:"Relacja jeden-do-wielu",sort:"Pole systemowe używane do zmiany kolejności elementów (w stylu przeciągnij i upuść)",status:"Pole systemowe używane do publikowania diagramów pracy",string:"Jakikolwiek tekst, liczba, spacja, lub symbol - zdefiniowany i ograniczany przez swoją długość (liczbę znaków)",translation:"Charakterystyczne dla przekładów, przetrzymuje wielojęzykową treść w relacji jeden-do-wielu",uuid:"Universally Unique Identifier",datetime_created:"Pole systemowe do przetrzymywania informacji o dacie i czasie w którym element został stworzony, wykorzystywane przez rewizje",datetime_updated:"Pole systemowe do przetrzymywania informacji o dacie i czasie w którym element był aktualizowany, wykorzystywane przez rewizje",user_created:"Pole systemowe do przetrzymywania informacji o autorze elementu, wykorzystywane przez rewizje",user_updated:"Pole systemowe do przetrzymywania informacji o użytkowniku, który aktualizował element, wykorzystywane przez rewizje"},datatypes:{mysql:{CHAR:"Pole znakowe o stałej długości z zakresu od 1 do 255 bajtów. Po wstawieniu wartości puste miejsca pola CHAR są uzupełniane z prawej strony spacjami.",VARCHAR:"Pole znakowe o zmiennej długości z zakresu od 1 do 255 bajtów. Zajmowany jest jedynie taki obszar pamięci, jakiego wymaga wartość wstawiona w to pole.",TINYTEXT:"Tekst o długości nieprzekraczającej 255 znaków.",TEXT:"Tekst o długości nieprzekraczającej 65,535 znaków.",MEDIUMTEXT:"Tekst o długości nieprzekraczającej 16,777,215 znaków.",LONGTEXT:"Tekst o długości nieprzekraczającej 4,294,967,295 znaków.",BOOLEAN:"Prawda lub fałsz. Zapisywany odpowiednio przy pomocy 1 lub 0.",TINYINT:"Liczba całkowita. Jeśli zapisywana ze znakiem przyjmuje liczby z zakresu od -128 do 127, bez znaku od 0 do 255.",SMALLINT:"Liczba całkowita. Jeśli zapisywana ze znakiem przyjmuje liczby z zakresu od -32,768 do 32,767, bez znaku od 0 do 65,535.",MEDIUMINT:"Liczba całkowita. Jeśli zapisywana ze znakiem przyjmuje liczby z zakresu od -8,388,608 do 8,388,607, bez znaku od 0 do 16,777,215.",INT:"Liczba całkowita. Jeśli zapisywana ze znakiem przyjmuje liczby z zakresu od -2,147,483,648 do 2,147,483,647, bez znaku od 0 do 4,294,967,295.",BIGINT:"Liczba całkowita. Jeśli zapisywana ze znakiem przyjmuje liczby z zakresu od -9,223,372,036,854,775,808 do 9,223,372,036,854,775,807, bez znaku od 0 do 18,446,744,073,709,551,615.",DECIMAL:"Liczba zmiennoprzecinkowa pozwalająca na dokładną reprezentację liczby posiadającej od 1 do 65 cyfr przed (L) i od 0 do 30 cyfr po przecinku (D). Przechowywana w formacie 'L,D'",FLOAT:"Liczba zmienno przecinkowa zapisująca liczbę do długości 4 bajtów.",DOUBLE:"Liczba zmienno przecinkowa zapisująca liczbę do długości 8 bajtów.",DATE:"Data z przedziału pomiędzy `1000-01-01`, a `9999-12-31`.",DATETIME:"Data i czas z przedziału pomiędzy `1000-01-01 00:00:00`, a `9999-12-31 23:59:59`.",TIMESTAMP:"Data i czas z przedziału pomiędzy `1970-01-01 00:00:01` UTC, a `2038-01-19 03:14:07` UTC.",TIME:"Czas z przedziału pomiędzy `-838:59:59`, a `838:59:59`.",YEAR:"Rok z przedziału pomiędzy  `1901`, a `2155`, lub `0000`"}},date_and_time:"Data i czas",db_user:"Użytkownik bazy danych",db_password:"Hasło użytkownika bazy danych",db_name:"Nazwa bazy danych",db_type:"Typ bazy danych",db_column_name:"Nazwa kolumny w bazie danych...",db_updated:"Baza danych została zaktualizowana poprawnie",db_update_failed:"Baza danych nie mogła zostać zaktualizowana.",default:"Domyślnie",delete:"Usuń",delete_are_you_sure:"Na pewno chcesz usunąć ten element? Tej akcji nie będzie można cofnąć.",delete_collection_are_you_sure:"Na pewno chcesz usunąć tę kolekcję? Tej akcji nie będzie można cofnąć.",delete_field_are_you_sure:'Na pewno chcesz usunąć pole "{field}"? Tej akcji nie będzie można cofnąć.',delete_role_are_you_sure:'Na pewno chcesz usunąć rolę "{name}"? Tej akcji nie będzie można cofnąć.',delete_bookmark:"Usuń zakładkę",delete_bookmark_body:"Na pewno chcesz usunąć tę zakładkę? Tej akcji nie będzie można cofnąć.",description:"Opis",delete_confirmation:"Usuń potwierdzenie",dialog_beginning:"Początek okna dialogowego.",discard_changes:"Odrzuć zmiany.",display_name:"Wyświetlana nazwa",drop_files:"Nie można upuścić plików | Upuść plik tutaj... | Upuść pliki tutaj...",dont_show:"Nie pokazuj",editing:"Edycja elementu: {collection}",editing_item:"Edycja elementu",editing_items:"Grupowa edycja {count} elementów",editing_single:"Edycja {collection}",email_address:"Adres email",email:"Email",empty_collection:"Pusta kolekcja",empty_collection_body:"Nie ma jeszcze żadnych elementów w tej kolekcji.",enable_manual_sorting:"Włącz ręczne sortowanie",enter_value:"Wpisz wartość",enter_collection_name:"Wpisz nazwę kolekcji...",enter_role_name:"Wpisz nazwę roli...",environment:"Środowisko",project_key:"Klucz projektu",errors:{"-1":"Nie udało połączyć się z API",11:"Nie można nawiązać połączenia z bazą danych",100:"Zły login i/lub hasło",101:"Wylogowano ze względu na brak aktywności",102:"Wylogowano ze względu na brak aktywności",103:"Użytkownik nieaktywny",106:"Zły login i/lub hasło",107:"Użytkownik nie odnaleziony"},error_unknown:"Nastąpił nieznany błąd. Spróbuj ponownie później.",esc_cancel:"Naciśnięcie klawisza escape spowoduje anulowanie i zamknięcie okna.",equal_to:"Równe z",existing:"Istniejące",fetching_data:"Trwa pobieranie danych",field:"Pole",field_type:"Typ pola",field_created:"{field} Utworzono pole",field_updated:"{field} Zaktualizowano pole",field_removed:"{field} Usunięto pole",field_already_exists:"{field} Już istnieje",fields:"Pola",fields_are_saved_instantly:"Zmiany zapisane są natychmiastowo",file:"Plik",file_library:"Biblioteka plików",file_upload:"Wgrany plik(i)",forgot_password:"Zapomniałem hasła",greater_than_equal:"Większe lub równe od",greater_than:"Większe od",help_and_docs:"Pomoc i dokumentacja",keep_editing:"Kontynuuj edycję",hidden_detail:"Ukryte w detalu",hidden_browse:"Ukryte podczas przeglądania",host:"Host",in_list:"Jeden z tych",initial_schema:"Wybierz początkowy schemat",initial_schema_copy:"Wybierz spośród istniejących architektur baz danych lub utwórz nową. Zawsze możesz rozszerzyć lub zmienić to ustawienie później.",interface:"Interfejs",interface_count:"Brak interfejsu | Jeden interfejs | {count} interfejsy/ów",interfaces:"Interfejsy",info:"Info",intelligent_defaults:"Ustawienia zaawansowane pozwalają Ci na skonfigurowanie sposobu przechowywania danych w bazie danych oraz na edycję dodatkowych ustawień aplikacji.",interface_settings:"Każdy interfejs może być skrojony na miarę Twoich potrzeb. Poniżej znajdują się dostępne ustawienia tego interfejsu, ale tylko niektóre są wymagane.",install:"Zainstaluj",install_copy:"To API nie zostało jeszcze skonfigurowane. Chcesz przeprowadzić instalację oraz konfigurację teraz?",is_empty:"Jest pusty",is_not_null:"Nie jest NULLem",is_null:"Jest NULLem",item_count:"Brak elementów | Jeden element | {count} elementy/ów",event_count:"Brak wydarzeń | Jedno wydarzenie| {count} wydarzenia/ń",role_count:"Brak ról | Jedna rola | {count} ról",item_count_filter:"Brak odfiltrowanych elementów | Jeden odfiltrowany element | {count}filtrowane elementy/ów",item_deleted:"Element usunięty",item_saved:"Element zapisany | {count} elementy zapisane",junction_collection:"Kolekcja Junction",cant_disable_primary:"Nie możesz wyłączyć typu klucza podstawowego dla istniejącego pola. Zamiast tego usuń takie pole.",extension_error:"Wystąpił problem podczas ładowania rozszerzenia {ext}.",extensions_missing:"Nie znaleziono rozszerzeń",extensions_missing_copy:"Upewnij się, że zainstalowałeś rozszerzenia systemowe.",latency:"Opóźnienie",learn_more:"Dowiedz się więcej",leave_comment:"Napisz komentarz...",length:"Długość",length_disabled_placeholder:"Długość jest określona przez typ danych",less_than_equal:"Równe lub mniejsze od",less_than:"Mniejsze od",limited:"Ograniczone",loading:"Wczytywanie...",loading_more:"Wczytywanie kolejnych elementów...",login:"Logowanie",m2m:"Wiele-do-wielu (M2M)",m2o:"Wiele-do-jednego (M2O)",o2m:"Jeden-do-wielu (O2M)",name:"Nazwa",name_field:"Nazwij pol {field} i dodaj pomocny dla użytkowników opis.",navigate_changes:"Na pewno chcesz opuścić tę stronę? Wszelkie zmiany, których dokonałeś zostaną utracone jeśli to zrobisz.",new:"Nowy",new_file:"Nowy plik",no_related_entries:"Nie ma żadnych powiązanych wpisów",not_between:"Nie pomiędzy",not_contains:"Nie zawiera",note:"Notatka",note_note:"Opis do użytku wewnętrznego...",note_hidden:"[Dowiedz się więcej](https://docs.directus.io/guides/collections.html#hidden)",note_icon:"Ikona pokazywana w bocznym pasku nawigacji",note_managed:"[Dowiedz się więcej](https://docs.directus.io/guides/collections.html#managing-collections)",note_single:"[Dowiedz się więcej](https://docs.directus.io/guides/collections.html#single)",no_results:"Brak wyników",no_results_body:"Żaden element kolekcji nie spełnia obecnych filtrów",no_collections:"Brak skonfigurowanych kolekcji",no_collections_body:"Wygląda na to, że nie istnieje jeszcze żadna skonfigurowana kolekcja",no_fields:"Brak skonfigurowanych pól",no_fields_body:"Wygląda na to, że ta kolekcja nie posiada jeszcze żadnego skonfigurowanego pola",no_files:"Brak plików",no_files_body:"Wygląda na to, że żaden plik nie został jeszcze wgrany na serwer",numeric:"Numeryczne",page_not_found:"Nie odnaleziono strony",page_not_found_body:"Strona, której poszukujesz, nie istnieje.",permissions:"Uprawnienia",name_bookmark:"Jak chciałbyś nazwać tę zakładkę?",next:"Następny",none:"Żaden",not_empty:"Nie jest puste",not_equal_to:"Nie jest równe z",not_in_list:"Nie jest jednym z tych",no_interface_error:"Pole {field} nie ma skonfigurowanego interfejsu",manage:"Zarządzaj",manage_started:"Rozpoczęto zarządzanie {collection}",manage_stopped:"Zakończono zarządzenie {collection}",max_size:"Maks. wielkość: {size}",max_one_primary_key:"Możesz mieć tylko jeden klucz podstawowy w kolekcji",dont_manage:"Nie zarządzaj",dont_manage_copy:"Przywileje oraz ustawienia dla kolekcji {collection} zostaną usunięte z systemu na stałe! Na pewno chcesz wykonać tę operację?",more_options:"Więcej opcji",mixed:"Mieszany",my_profile:"Mój profil",other:"Inne",ok:"OK",operator:"Operator",open_on_gh:"Otwórz na GitHubie",options:"Opcje",password:"Hasło",password_reset_sent:"Email z instrukcją resetowania hasła został wysłany na adres {email}",permissions_no_collections:"Ten projekt nie posiada jeszcze żadnej kolekcji.",permissions_admin:"Admini mają domyślnie dostęp do wszystkich danych systemu.",permission_states:{none:"Żaden",mine:"Tylko dla mnie",role:"Tylko dla roli",full:"Wszyscy",read:"Tylko do odczytu",create:"Stwórz",on_create:"Po utworzeniu",update:"Zaktualizuj",on_update:"Po zaktualizowaniu",always:"Zawsze"},popular:"Popularne",powered_by_directus:"Zasilane przez Directus",preview_and_revert:"Podglądnij i cofnij",primary_key:"Klucz podstawowy",port:"Port",project:"Projekt",project_name:"Nazwa projektu",project_info:"Informacje nt. projektu",project_info_copy:"Poniżej znajduje się kilka pytań odnośnie Twojego projektu, włączając w to pola na wpisanie danych logowania do Twojego pierwszego konta administracyjnego.",read:"Odczyt",readable_fields:"Odczytywalne pola",readable_fields_copy:"Wybierz te pola, które użytkownik może zobaczyć",readonly:"Tylko do odczytu",relational:"Relacyjny",report_issue:"Zgłoś błąd",request_feature:"Zaproponuj funkcjonalność",regex:"RegEx",relation_setup:"Ponieważ to jest relacyjne pole potrzebujemy określić powiązane z nim, inne pola.",relation_setup_copy:"Są różne typy danych relacyjnych, ten interfejs wykorzystuje jeden z nich zwany {relation}.",related_entries:"Ma powiązane wpisy",related_collection:"Powiązana kolekcja",remove:"Usuń",remove_related:"Usuń powiązany element",relationship:"Powiązanie",required:"Wymagane",reset_preferences:"Resetuj wszystkie preferencje",reset_password:"Resetuj hasło",revert:"Przywróć",revert_copy:"Na pewno chcesz przywrócić stan tego elementu z dnia {date}?",roles:"Role użytkownika",role_settings:"Ustawienia ról",save:"Zapisz",save_and_add:"Zapisz i dodaj nowy",save_and_stay:"Zapisz i zostań",save_as_copy:"Zapisz jako kopię",save_as_bookmark:"Zapisz jako zakładkę",schema:"Schemat",search:"Wyszukaj",select_from_device:"Wybierz z urządzenia",select_existing:"Wybierz istniejące",select_field:"Wybierz pole",select_fields:"Wybierz pola",search_interface:"Wyszukaj interfejs...",select_interface_below:"Wybierz interfejs poniżej",select_statuses:"Wybierz statusy",select_statuses_copy:"Wybierz statusy, z których będzie mógł korzystać użytkownik",settings:"Ustawienia",settings_project:"Ustawienia projektu",settings_global:"Ustawienia globalne",settings_update_database:"Aktualizuj bazę danych",settings_update_database_subtext:"Uruchom skrypt",settings_update_database_confirm:"Wykonanie tej akcji spowoduje zaktualizowanie pół systemowych w Twojej bazie danych do najnowszej wersji Directusa. Zanim będziesz kontynuował upewnij się, że wykonałeś kopię zapasową danych.",settings_collections_fields:"Kolekcje i pola",settings_permissions:"Role i uprawnienia",settings_extensions:"Rozszerzenia",settings_saved:"Ustawienia zapisane",server_details:"Szczegółowe dane serwera",server_error:"Błąd serwera",server_error_copy:"Coś jest nie tak z tą instancją serwera lub bazy danych.",server_trouble:"Problem z serwerem",server_trouble_copy:"Spróbuj ponownie później lub zwróć się o pomoc do administracji systemu.",advanced_options:"Opcje zaawansowane",show_directus_collections:"Pokaż systemowe kolekcje Directusa",something_went_wrong:"Coś poszło nie tak.",something_went_wrong_body:"Wystąpił problem podczas przetwarzania żądania. Odśwież stronę i spróbuj ponownie.",sort_by:"Sortuj",sign_in:"Zarejestruj się",signing_in:"Rejestracji",sign_out:"Wylogowuj się",sign_out_confirm:"Na pewno chcesz się wylogować?",sign_out_confirm_edits:"Na pewno chcesz się wylogować? Wszystkie niezapisane zmiany zostaną utracone.",text:"Tekst",this_collection:"Ta kolekcja",to:"Do",unsaved_changes_copy:"Dokonano niezapisanych zmian! Na pewno chcesz opuścić już tę stronę?",user_directory:"Katalog użytkownika",update:"Aktualizuj",update_confirm:"Jesteś pewien, że chcesz zaktualizować {count} elementów?",unique:"Unikalne",user_edit_warning:"Aktualnie {first_name} {last_name} również edytuje ten element. Proszę skoordynuj z nim pracę, by nie utracić swoich zmian.",value:"Wartość",values:"Wartości",validation:"Walidacja",version:"Wersja",version_and_updates:"Wersje i aktualizacje",view_type:"Pokaż jako...",welcome:"Witaj",writable_fields:"Edytowalne pola",writable_fields_copy:"Wybierz pola, które użytkownik będzie mógł edytować",yes:"Tak",duplicating_field:"Duplikuję pole",duplicate:"Zduplikuj",upload_exceeds_max_size:"{filename} nie może zostać wgrany. Twój serwer nie jest odpowiednio skonfigurowany, by mój przyjmować pliki tej wielkości.",file_type_not_accepted:"{filename} nie może zostać wgrany. Nie jest to prawidłowy typ pliku dla tego pola."}}}]);
//# sourceMappingURL=lang-pl-PL.13321b46.js.map