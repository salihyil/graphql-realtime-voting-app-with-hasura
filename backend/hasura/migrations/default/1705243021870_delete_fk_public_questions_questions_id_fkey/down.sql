alter table "public"."questions"
  add constraint "questions_id_fkey"
  foreign key ("id")
  references "public"."questions"
  ("id") on update restrict on delete cascade;
