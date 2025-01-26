const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			baseUrl: 'https://playground.4geeks.com/contact/agendas/cesar-amcolson'
		},
		actions: {
			userExists: async () => {
				try {
					const response = await fetch(`${getStore().baseUrl}`, {
						method: "GET",
						headers: {
							'Content-Type': 'application/json'
						}
					});
					if (response.status === 404) {
						return false;
					}
					return response.ok
				} catch (error) {
					console.error("Error Checking User Existance: ", error)
					return false;
				}
			},
			createUser: async () => {
				try {
					const response = await fetch(`${getStore().baseUrl}`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						}
					});
					if(!response.ok) {
						throw new Error(`error status: ${response.status}`);
					}
					const data = await response.json();
					console.log("User created successfully:", data);
				} catch (error) {
					console.error("Error Creating the User: ", error)
				}
			},
			fetchContacts: async () => {
				const actions = getActions()
				try {
					const exist = await actions.userExists();
					if (!exist) {
						await actions.createUser();
					}
					const response = await fetch(`${getStore().baseUrl}/contacts`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (!response.ok) {
						throw new Error(`Error Status: ${response.status}`);
					}
					let data = await response.json()
					console.log(data)
					setStore({ contacts: data.contacts });
					return getStore().contacts;
				} catch(error) {
					console.error("Error Fetching Contacts: ", error)
				}
			},
			createContact: async (contact) => {
				try {
					const response = await fetch(`${getStore().baseUrl}/contacts`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(contact)
					});
					if(!response.ok) {
						throw new Error(`Error Status: ${response.status}`);
					}
					await getActions().fetchContacts()
				} catch(error) {
					console.error("Error Creating new Contact: ", error);
				}
			},
			deleteContact: async (id) => {
				try {
					const response = await fetch(`${getStore().baseUrl}/contacts/${id}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (!response.ok) {
						throw new Error(`Error Status: ${response.status}`)
					}
					await getActions().fetchContacts()
				} catch (error) {
					console.error("Error Deleting Contact: ", error)
				}
			},
			updateContact: async (id, updatedContact) => {
				try {
					const response = await fetch(`${getStore().baseUrl}/contacts/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(updatedContact)
					});
					if(!response.ok) {
						throw new Error(`Error Status: ${response.status}`)
					}
					await getActions().fetchContacts()
				} catch (error) {
					console.error("Error Updating Contact: ", error)
				}
			}
		}
	};
};

export default getState;