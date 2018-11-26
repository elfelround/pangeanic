# coding=utf-8

from .entities.entity import Session, engine, Base
from .entities.thing import Thing

# generate database schema
Base.metadata.create_all(engine)

# start session
session = Session()

# check for existing data
things = session.query(Thing).all()

if len(things) == 0:
    # create and persist dummy exam
    python_exam = Thing("SQLAlchemy Exam", "Test your knowledge about SQLAlchemy.", "script")
    session.add(python_exam)
    session.commit()
    session.close()

    # reload exams
    things = session.query(Thing).all()

# show existing exams
print('### Things:')
for thing in things:
    print(f'({thing.id}) {thing.title} - {thing.description}')