PGDMP     '                    z            courses    14.2    14.2     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    41073    courses    DATABASE     k   CREATE DATABASE courses WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE courses;
                postgres    false            ?            1259    41111    courses    TABLE     ?  CREATE TABLE public.courses (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255),
    image character varying(255),
    slug character varying(255),
    videoid character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone
);
    DROP TABLE public.courses;
       public         heap    postgres    false            ?            1259    41110    courses_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.courses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.courses_id_seq;
       public          postgres    false    210            ?           0    0    courses_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.courses_id_seq OWNED BY public.courses.id;
          public          postgres    false    209            \           2604    41114 
   courses id    DEFAULT     h   ALTER TABLE ONLY public.courses ALTER COLUMN id SET DEFAULT nextval('public.courses_id_seq'::regclass);
 9   ALTER TABLE public.courses ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            ?          0    41111    courses 
   TABLE DATA           u   COPY public.courses (id, name, description, image, slug, videoid, "createdAt", "updatedAt", "deletedAt") FROM stdin;
    public          postgres    false    210   ?       ?           0    0    courses_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.courses_id_seq', 13, true);
          public          postgres    false    209            ^           2606    41118    courses courses_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.courses DROP CONSTRAINT courses_pkey;
       public            postgres    false    210            `           2606    41120    courses courses_slug_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_slug_key UNIQUE (slug);
 B   ALTER TABLE ONLY public.courses DROP CONSTRAINT courses_slug_key;
       public            postgres    false    210            ?   ?  x????n?F???SL/??"M}X?tk;v??eu??r???M?2?K???衧z*?????	r???~?I???Ќ?^??g?3?ݙ?:?*d?9l????l??˟(|M???d?b????L4I?L??pQ,Ȁ?W?x~%@?Ώ	.??eR?_?y~=??X??n??&Y_??
?&?;c??pkS3Z_I??Uf??yT%?S?~љw?i?u?lB??z?i?HL?%2tY???qj?N??t\????G??????/????C?uP?{CPJ/??6?el????=8ʬ҂??#ZW3?
2àf$$X.`q1P?iü{??L??L?
?1qP?)???,&V(?jH,	?	?$b	???X?x?k?H??????S")?()?`???}???`&B?˄?2? q??	UF?Q?/g?{|?????5??U??e??;L5돘7??u???l?;?O???????J:G%Ԋ'?l#1e??!?k!?VaFKx?B?]5YA?J???(??<?tՃm?x?$V????̧HJ?ձ???8ҭ?ZE?	?e$??W$??Ǹ鉡?cj?Y?[U]???????^?i?jH%???s?|???`????
???X?-a?;G?,[??_α???X?X????W???^?F?(?֖?ۢ??4??nO/?O?r??.5/?{?ٸ!?./Ӫ?4K?:??w??.??w?gdJ?"?@o? (???T{H??????W?j???M??]???Y!?????.?8??ג{p????J???!?/ŭ]9?h??ڲ?*o)??Rr0?6)????ӣ<????ax??i?<?P?K???l????????zp?K%?n??~~????T????YU9?߯f?????X\???-?Ql?:?{(V???[-??2?f-?l?4??;O?iU??????	[??[?$M?y?l??J?xޣ????????؎???????Y7?ð????O?UCBz/???????E     