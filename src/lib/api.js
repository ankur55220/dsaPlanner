const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Generic helpers to make future changes (e.g. switching to supabase-js client)
// easier. All data access in the app should ideally go through these.

const buildQueryString = (params = {}) => {
  const search = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value == null) return;

    if (typeof value === "string") {
      search.append(key, value);
    } else if (Array.isArray(value)) {
      // IN filter shorthand: values array -> in.("v1","v2")
      const inList = value.map((v) => `"${v}"`).join(",");
      search.append(key, `in.(${inList})`);
    } else if (typeof value === "object" && value.op && value.value != null) {
      // Structured filter: { op: 'eq' | 'in', value }
      if (Array.isArray(value.value) && value.op === "in") {
        const inList = value.value.map((v) => `"${v}"`).join(",");
        search.append(key, `${value.op}.(${inList})`);
      } else {
        search.append(key, `${value.op}.${value.value}`);
      }
    }
  });

  return search.toString();
};

export const selectFrom = async (table, { select = "*", filters = {} } = {}) => {
  const filterQuery = buildQueryString(filters);
  const query = filterQuery ? `&${filterQuery}` : "";
  const url = `${SUPABASE_URL}/rest/v1/${table}?select=${select}${query}`;

  try {
    const response = await fetch(url, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Supabase select error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const deleteFrom = async (table, filters = {}) => {
  const filterQuery = buildQueryString(filters);
  const query = filterQuery ? `?${filterQuery}` : "";
  const url = `${SUPABASE_URL}/rest/v1/${table}${query}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });

    if (!response.ok) {
      const text = await response.text();
      return {
        data: null,
        error: new Error(`Supabase delete error: ${response.status} ${text}`),
      };
    }

    return { data: null, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const insertInto = async (table, payload) => {
  const url = `${SUPABASE_URL}/rest/v1/${table}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      return {
        data: null,
        error: new Error(`Supabase insert error: ${response.status} ${text}`),
      };
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
