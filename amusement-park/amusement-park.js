/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  // throw new Error('Please implement the createVisitor function.');
  const visitor = {
    name: name,
    age: age,
    ticketId: ticketId
  };

  return visitor;
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  // throw new Error('Please implement the revokeTicket function.');
  if(visitor.hasOwnProperty('name')){
    visitor.ticketId = null;
  }

  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  // throw new Error('Please implement the ticketStatus function.');
  let ticketStatus;
  if(tickets[ticketId]!==undefined){
    if(tickets[ticketId]!==null){
      ticketStatus = 'sold to ' + tickets[ticketId];
    }else{
      ticketStatus = 'not sold';
    }
  } else {
    ticketStatus = 'unknown ticket id';
  }


  return ticketStatus;
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  // throw new Error('Please implement the simpleTicketStatus function.');
  let ticketStatus;
  if(!tickets[ticketId] || !tickets.ticketId?.name){
    ticketStatus = tickets[ticketId]?? 'invalid ticket !!!';
  }else{
    ticketStatus = 'sold to ' + tickets.ticketId?.name;
  }

  return ticketStatus;
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  // throw new Error('Please implement the gtcVersion function.');
  if(!visitor.gtc){
    return visitor.gtc;
  }else if(!visitor.gtc?.version){
    return visitor.gtc?.version;
  }else{
    return visitor.gtc?.version;
  }
}
