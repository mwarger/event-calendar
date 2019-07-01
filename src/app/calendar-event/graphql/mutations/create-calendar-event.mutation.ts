import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

import { CalendarEvent, CreateCalendarEventMutationVariables } from '../../models/calendar-event.model';

@Injectable()
export class CreateCalendarEventMutation extends Mutation<CalendarEvent, CreateCalendarEventMutationVariables> {
  document = gql`
    mutation CreateCalendarEvent($event: CalendarEventInput!) {
      createEvent(event: $event) {
        _id
        status
        eventStart
        startTime
        eventEnd
        endTime
        name
        description
        location
        recurring
        guests {
          _id
          name
          email
          attending
        }
      }
    }
  `;
}
