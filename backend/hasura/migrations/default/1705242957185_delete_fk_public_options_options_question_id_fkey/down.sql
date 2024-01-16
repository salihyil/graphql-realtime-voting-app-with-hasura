alter table "public"."options"
  add constraint "options_question_id_fkey"
  foreign key ("question_id")
  references "public"."questions"
  ("id") on update restrict on delete cascade;
